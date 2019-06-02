// import { Config, ConfigType, ServicesConfig } from '../../core/config';
// import { HttpClient } from '../../components/httpClient';
//
// const config = <ServicesConfig>Config.getInstance().getConfig(ConfigType.Services);
//
// const httpClient: HttpClient = new HttpClient({
//     axios: {
//         baseURL: config.wish
//     }
// });
//
// const axios = httpClient.axios;

export class WishService {

    public static async getWishes(): Promise<{ id: number, name: string }[]> {
        // const resp = await axios.get(`/`);

        return [
            {
                id: 1,
                name: 'ice cream',
            },
            {
                id: 2,
                name: 'lemonade',
            },
        ];
    }
}
