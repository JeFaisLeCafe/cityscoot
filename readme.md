# Quickstart

To launch the project locally, just run:

```shell
npm i
npm run start
```

You can specify toward which target you want to want to run the simulator:

```shell
npm run ios
npm run android
```

You can also find the build directly in the project, as _application-797f5e42-efea-4996-98b4-19e21b0d4270.aab_, or by using Expo.

# Dev Journey

I started the assignment by going through the featured demanded, and setup-in the project.
I decided to go with a quick Expo / ReactNative / Typescript setup, because I'm familiar with this technos, and because the scope of the project was limited.

Following the instructions, I decided to not focus at all on the user/login system, but instead directly accessing the map screen.

I found an [API to get random data points](https://random-data-api.com/) to display on the map as Pins; I tried to find something similar on the Nasa website, but couldn't find something that would fit the specifications; and I thought it was closer to real life to have an external API.

For the data fetching, I decided to go with a provider/hook system, similar to [React Query](https://react-query-v3.tanstack.com/).

Finally for the style I went with [Styled Components](https://styled-components.com/), a standard of the industry.

# Ressources

[Expo](https://docs.expo.dev/get-started/create-a-new-app/)

[ReactNative Maps](https://github.com/react-native-maps/react-native-maps)

[API](https://random-data-api.com/)

[TypeScript](https://www.typescriptlang.org/)

[Axios](https://axios-http.com/fr/docs/intro)
