import { prisma } from "../../../../lib/prisma";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title } = body;

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        const task = await prisma.tasks.create({
            data: { title },
        });

        return NextResponse.json(task, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const tasks = await prisma.tasks.findMany();
        return NextResponse.json(tasks, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}



