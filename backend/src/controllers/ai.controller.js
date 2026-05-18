const OpenAI = require("openai");

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY,

});

const askAI = async (req, res) => {

  try {

    const { message } = req.body;

    const completion = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [

        {

          role: "system",

          content:
            "You are an AI Mentor for an LMS platform helping students solve coding and learning doubts.",

        },

        {

          role: "user",

          content: message,

        },

      ],

    });

    res.json({

      reply:

        completion.choices[0].message.content,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "AI Error",

    });

  }

};

module.exports = {

  askAI,

};