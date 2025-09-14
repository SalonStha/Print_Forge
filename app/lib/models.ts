import modelData from "../data/models.json"

export function getAllModels() {
    return modelData;
}

export async function getModelById(id: string | number) {
    const model = modelData.find((model) => String(model.id) === id);
    if (!model) {
        throw new Error("Model not found");
    }
    return model;

}