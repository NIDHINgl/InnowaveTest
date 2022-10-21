import RNFS from 'react-native-fs';

const path = RNFS.DocumentDirectoryPath + '/test.json';
  
export const handleExport = async (data:any) => {
    try {
        await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
        console.log('Success!',RNFS.DocumentDirectoryPath);
    } catch (error) {
        console.log(error);
    }
};

export const handleImport = () => {
    RNFS.readFile(RNFS.DocumentDirectoryPath + '/test.json', 'utf8')
      .then((res) => {
        console.log(res);
        const d = JSON.parse(res);
        console.log('sfdsfsd',d)
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  };

export const callApi = async () => {
    return fetch('https://zenquotes.io/api/today')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };