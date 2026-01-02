import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CategoryService } from "@/services/category.service";
import { verifyAdmin } from "@/utils/auth-guard";
import { handleCommonErrors } from "@/utils/errorHandler";

/**
 * GET /api/categories
 * Public: List all categories
 */
export async function GET() {
  try {
    await connectDB();
    const categories = await CategoryService.getAllCategories();
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    return handleCommonErrors(error);
  }
}

/**
 * POST /api/categories
 * Admin Only: Create a new category
 */
export async function POST(req: NextRequest) {
  try {
    verifyAdmin(req); // Security

    await connectDB();
    const data = await req.json();

    const newCategory = await CategoryService.createCategory(data);

    return NextResponse.json(
      { message: "Category created successfully", category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    return handleCommonErrors(error);
  }
}