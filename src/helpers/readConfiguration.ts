const readYamlFile = require('read-yaml-file')

type Configuration = {
    private: {
        tokenSecret: String
    };
}

const readConfiguration = async (): Promise<Configuration> => await readYamlFile('./configuration.yml')

export default readConfiguration

