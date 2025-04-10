import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import { mongoDb } from "@/lib/mongodb";
import { ApiError } from "@/lib/ApiError";
import { ApiResponse } from "@/lib/ApiResponse";

export async function POST(req: NextRequest) {
  await mongoDb();

  try {
    const body = await req.json();
    const { email, name, password } = body;

    // Validation
    if (!email || !name || !password) {
      return NextResponse.json(
        new ApiError(400, "Missing or invalid fields"),
        { status: 400 }
      );
    }

    // Check for existing user by email only (since username is removed)
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return NextResponse.json(
        new ApiError(400, "User already exists"),
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json(
      new ApiResponse(201, { id: newUser._id }, "User created successfully"),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      new ApiError(500, error.message || "Something went wrong"),
      { status: 500 }
    );
  }
}
