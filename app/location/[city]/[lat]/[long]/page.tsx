import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { getClient } from "@/apollo-client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true,",
      longitude: long,
      latitude: lat,
      timezone: "EST",
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      Welcome to the weather : {city} {lat} {long}
    </div>
  );
}

export default WeatherPage;
