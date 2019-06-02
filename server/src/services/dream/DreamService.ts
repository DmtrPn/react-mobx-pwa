// import { Config, ConfigType, ServicesConfig } from '../../core/config';
// import { HttpClient } from '../../components/httpClient';

// const config = <ServicesConfig>Config.getInstance().getConfig(ConfigType.Services);

// const httpClient: HttpClient = new HttpClient({
//     axios: {
//         baseURL: config.dream
//     }
// });
//
// const axios = httpClient.axios;

export class DreamService {

    public static async getDreams(): Promise<{ id: number, name: string }[]> {
        // const resp = await axios.get(`/`);

        return [
            {
                id: 1,
                name: 'fly to the moon',
            },
            {
                id: 2,
                name: 'fly to the moon again',
            },
        ];
    }
}
