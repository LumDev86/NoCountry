import server from "./server";
import { config }  from "./config/validateEnv"


server.listen(config.PORT, () => {
    console.log(`✅ Port running in port ${config.PORT}`);
});

