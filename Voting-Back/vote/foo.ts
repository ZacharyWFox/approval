import { Schema, model, connect, Document } from "mongoose";

interface IOption {
    name: string;
    votes: number;
}

interface IPoll extends Document {
    name: string;
    options: {[optName: string]: number};
    phoneNumbers: string[];
}


const pollSchema: Schema = new Schema<IPoll>({
    name: { type: String, required: true },
    options: {},
    phoneNumbers: { type: [], required: false},
});

const Poll = model<IPoll>('Poll', pollSchema);

run().catch(err=> console.log(err));

async function run() {
    await connect('mongodb://127.0.0.1:55002/test');

    const poll = new Poll({
        name: 'Where to eat?',
        options: {'din tai fung 3': 0},
    })

    await poll.save();

    console.log(poll.name);
}

export default Poll;