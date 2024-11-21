"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var uuid = require('uuid');
// -- Classes
var User = /** @class */ (function () {
    function User(name, email, password, token) {
        this.name = name;
        this.email = email;
        this.password = password; // TODO needs more security
        this.token = token;
    }
    return User;
}());
var Game = /** @class */ (function () {
    function Game(id, game, state) {
        this.id = id;
        this.game = game;
        this.state = state;
    }
    return Game;
}());
// -- Server stuff
var app = express();
var PORT = process.argv.length > 2 ? process.argv[2] : 3000;
// The users are currently saved in memory and disappear whenever the service is restarted.
var users = new Map([]);
// JSON body parsing using built-in middleware
app.use(express.json());
// Serve up the front-end static content hosting
app.use(express.static('../public'));
// Router for service endpoints
var apiRouter = express.Router();
app.use("/api", apiRouter);
// CreateAuth a new user
apiRouter.post('/auth/create', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, user_1;
    return __generator(this, function (_a) {
        user = users[req.body.email];
        if (user) {
            res.status(409).send({ msg: 'Existing user' });
        }
        else {
            user_1 = new User(req.body.name, req.body.email, req.body.password, uuid.v4());
            users[user_1.email] = user_1;
            res.send({ token: user_1.token });
        }
        return [2 /*return*/];
    });
}); });
// GetAuth login an existing user
apiRouter.post('/auth/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = users[req.body.email];
        if (user) {
            if (req.body.password === user.password) {
                user.token = uuid.v4();
                res.send({ token: user.token });
                return [2 /*return*/];
            }
        }
        res.status(401).send({ msg: 'Unauthorized' });
        return [2 /*return*/];
    });
}); });
// DeleteAuth logout a user
apiRouter.delete('/auth/logout', function (req, res) {
    var user = Object.values(users).find(function (u) { return u.token === req.body.token; });
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});
apiRouter.get('/auth/list', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(users);
        res.status(204).end();
        return [2 /*return*/];
    });
}); });
// Return the application's default page if the path is unknown
app.use(function (_req, res) {
    res.sendFile('index.html', { root: '..' });
});
app.listen(PORT, function () {
    console.log("Now listening on port ".concat(PORT));
});
