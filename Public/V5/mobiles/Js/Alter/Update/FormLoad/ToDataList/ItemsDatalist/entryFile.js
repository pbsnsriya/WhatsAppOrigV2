import { StartFunc as GetFetch } from './getFetch.js'
import { StartFunc as afterFetch } from './afterFetch.js'

const StartFunc = async () => {
  let localResponse = await GetFetch();

  if (localResponse.status == 200) {
    afterFetch(await localResponse.json());
  };
};

export { StartFunc };
