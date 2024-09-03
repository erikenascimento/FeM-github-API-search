module.exports = {
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};
