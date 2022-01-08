import axios from "axios"
import config from "./Config"

const apiHost = config.BackEndAPIHost
const apiPort = config.BackEndAPIPort
const apiVersion = config.BackEndAPIVersion

export const ApiDestination = `http://${apiHost}:${apiPort}/api/v${apiVersion}`

const requester = axios.create({
	baseURL: ApiDestination
})

export default requester
