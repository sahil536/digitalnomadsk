import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CSV_FILE = path.join(DATA_DIR, "leads.csv");

function escapeCSV(value) {
  if (value === null || value === undefined) {
    return "";
  }

  let stringValue = String(value);

  // Prevent CSV formula injection
  if (/^[=+\-@]/.test(stringValue)) {
    stringValue = "'" + stringValue;
  }

  // Escape quotes
  stringValue = stringValue.replace(/"/g, '""');

  return `"${stringValue}"`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      mobile,
      email,
      projectScope,
      message,
    } = body;

    // Basic validation
    if (!fullName || !mobile || !email || !projectScope) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    await fs.mkdir(DATA_DIR, {
      recursive: true,
    });

    // Create CSV header if file doesn't exist
    try {
      await fs.access(CSV_FILE);
    } catch {
      const header =
        "submitted_at,full_name,mobile,email,project_scope,message\n";

      await fs.writeFile(
        CSV_FILE,
        header,
        "utf8"
      );
    }

    const row = [
      new Date().toISOString(),
      fullName,
      mobile,
      email,
      projectScope,
      message || "",
    ]
      .map(escapeCSV)
      .join(",") + "\n";

    // Append submission
    await fs.appendFile(
      CSV_FILE,
      row,
      "utf8"
    );

    return NextResponse.json({
      success: true,
      message: "Your project request has been received.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}