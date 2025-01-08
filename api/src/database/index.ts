import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        console.log("Conectando 🎲");
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("Conectado ✅");

    } catch {
        throw new Error("Não conectou ❌");
    }
}