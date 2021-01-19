process.env.ENV_NAME = "test";

module.exports = {
    moduleFileExtensions: ["ts", "js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
            diagnostics: true,
        },
    },
    testMatch: ["<rootDir>/{src,test}/**/?(*.)+(spec|test).[jt]s"],
};
