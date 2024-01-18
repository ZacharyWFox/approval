
import { Models, models } from "mongoose";

const createVote = async (opts: string[], name: string) => {
    // Save a fresh vote
    const freshOpts = freshVote(opts);
    var poll = new models.Poll({
        name: name,
        options: freshOpts,
    });
    await poll.save();
};

// const mongoTransact = async (model: Models)

const freshVote = (opts: string[]): Object => {
    return opts.map((op) => ({[op]: 0}));
};