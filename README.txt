# Cyber Escape Room Setup



## Web Application Setup

### Pre-requisites
- Install Node.js
- ```npm install```
- ```npm install react-scripts start --force```

### Setup
- ```npm start```

### Dashboard
- Go to http://SERVER_IP:8000/dashboard 
  
## Server Setup



### Pre-requisites
- Install Python 3.12
- Run ```pyenv_setup.sh``` (Ensure you have run chmod+x on the script)

### Setup
- Activate the python virtual environment if it is not activated (See instructions above)
- For Macbook: source venv/bin/activate 
- python server.py 
  

## LLM Setup



### Pre-requisites

- Install Python 3.12
- Download the LLM via https://huggingface.co/bartowski/openchat-3.6-8b-20240522-GGUF/blob/main/openchat-3.6-8b-20240522-Q4_K_M.gguf
- Move the LLM into ```/llm``` directory
- Run ```pyenv_setup.sh``` (Ensure you have run chmod+x on the script) 
  
### Setup

- Activate the python virtual environment if it is not activated (See instructions above)
- For Macbook: source venv/bin/activate 
- python llm.py 

### Configuration

- Change the system_prompt in llm.py to configure the behaviour of the llm

### References

Llama.cpp 

### Running on multiple machines
- Edit ```LLM_INSTANCES``` in ```krasnoai/server.py``` to add the IP addresses of the respective machines
- Activate the python virtual environment if it is not activated (See instructions above)

- Copy the /llm folder to the machines that will be running the LLM
- python llm.py 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Large Language Model environment setup

### Apple Silicon GPU

`!CMAKE_ARGS="-DLLAMA_METAL=on" FORCE_CMAKE=1 pip install llama-cpp-python`

