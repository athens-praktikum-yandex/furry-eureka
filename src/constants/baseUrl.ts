import { isServer } from "@libs/isServer";

export const BASE_URL = {
  praktikum: 'https://ya-praktikum.tech/api/v2',
  furryEureka: `https://${isServer ? 'server-app' : 'athens-furry-eureka-04.ya-praktikum.tech'}:5000`,
};
