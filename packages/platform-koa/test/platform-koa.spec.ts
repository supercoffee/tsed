import {PlatformTestUtils} from "@tsed/platform-test-utils";
import {PlatformKoa} from "../src";
import {rootDir, Server} from "./app/Server";

const utils = PlatformTestUtils.create({
  rootDir,
  platform: PlatformKoa,
  server: Server
});

describe("PlatformKoa integration", () => {
  describe("Handlers", () => {
    utils.test("handlers");
  });
  describe("Children controllers", () => {
    utils.test("childrenControllers");
  });
  describe("Inheritance controllers", () => {
    utils.test("inheritanceController");
  });
  describe("Scope Request", () => {
    utils.test("scopeRequest");
  });
  describe("Headers", () => {
    utils.test("headers");
  });
  describe("Statics files", () => {
    utils.test("statics");
  });
  describe("Cookies", () => {
    utils.test("cookies");
  });
  describe("Session", () => {
    utils.test("session");
  });
  describe("AcceptMime", () => {
    utils.test("acceptMime");
  });
  describe("HeaderParams", () => {
    utils.test("headerParams");
  });
  describe("PathParams", () => {
    utils.test("pathParams");
  });
  describe("QueryParams", () => {
    utils.test("queryParams");
  });
  describe("BodyParams", () => {
    utils.test("bodyParams");
  });
  describe("Location", () => {
    utils.test("location");
  });
  describe("Redirect", () => {
    utils.test("redirect");
  });
  describe("View", () => {
    utils.test("view");
  });
  describe("Errors", () => {
    utils.test("errors");
  });
  describe("Response", () => {
    utils.test("response");
  });
  describe("Routing", () => {
    utils.test("routing");
  });
  describe("Locals", () => {
    utils.test("locals");
  });
  describe("Multer", () => {
    utils.test("multer");
  });
  describe("Auth", () => {
    utils.test("auth");
  });
  describe("Module", () => {
    utils.test("module");
  });
  // EXTRA
  describe("Custom404", () => {
    utils.test("custom404");
  });
});
