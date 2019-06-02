import * as cluster from 'cluster';
import { Launcher } from './Launcher';
import { Main } from '../../../components/logging';

class ClusterLauncher extends Launcher {
    public launch(): void {
        if (cluster.isMaster) {
            const workersCount = this.config.workers;
            Main.info(`Starting ${workersCount} workers`);
            for (let i = 0; i < workersCount; i++) {
                cluster.fork();
            }
        } else {
            this.startServer();
        }
    }
}

export { ClusterLauncher };
