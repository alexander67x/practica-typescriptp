import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const tasks = await prisma.tasks.findMany();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Error fetching tasks" });
    }
  } else if (req.method === "POST") {
    try {
      const { title } = req.body;
      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }
      const newTask = await prisma.tasks.create({
        data: { title },
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: "Error creating task" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
