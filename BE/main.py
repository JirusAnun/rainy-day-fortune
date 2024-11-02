from fastapi import FastAPI, Request
from transformers import pipeline, set_seed
from typing import Union

app = FastAPI()

@app.post("/result")
async def read_root(request: Request):
    data = await request.json()
    answers = data.get("answers", [])
    
    if len(answers) < 4:
        return {"error": "Please provide at least 4 answers."}

    generator = pipeline('text-generation', model='gpt2')
    prompt = f"A person stands alone in the rain, reflecting on their thoughts, fears, and hopes. They feel echoes of {answers[0]} in their mind, hope the rain will wash away {answers[1]}, seek {answers[2]} as comfort, and recall peace from {answers[3]}. Describe this person’s personality and what they might be yearning for in life. Offer a piece of advice that could help them feel more grounded and find warmth even on cold, rainy days.:"
    set_seed(42)
    output = generator(prompt, max_length=200, num_return_sequences=1, force_download=True)
    generated_text = output[0]['generated_text']
    
    result = generated_text.split("rainy days.:\n\n※")[1].strip().replace("\n", "").replace("\\", "").replace("※", "").replace(".\n\n※", "").replace("\"", "")
    
    return {"generated_text": result}