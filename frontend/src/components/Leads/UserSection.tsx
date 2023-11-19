import { jwtDecode } from "jwt-decode";
import { UserCircle } from "lucide-react";

export function UserSection() {
    const token = localStorage.getItem('token')

    if(!token) throw new Error('Token not found as user!')

    const decoded = jwtDecode(token)
    console.log(decoded)

    return (
        <div className="mb-8 flex justify-center">
            <div className="flex items-center w-80 sm:w-96 justify-between rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-500">
                <div>
                    <UserCircle
                        className="inline-flex h-4 w-4 mr-2"
                    />
                </div>

                <div className="flex items-center font-semibold text-gray-600">
                    sair
                    <button
                        type="button"
                        title="logout"
                        className="p-[2px] ml-1 inline-flex items-center justify-center bg-indigo-200 hover:bg-violet-300 rounded-full"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <rect width={24} height={24} fill="url(#pattern0)" />
                            <defs>
                                <pattern
                                    id="pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width={1}
                                    height={1}
                                >
                                    <use xlinkHref="#image0_0_2" transform="scale(0.0416667)" />
                                </pattern>
                                <image
                                    id="image0_0_2"
                                    width={24}
                                    height={24}
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nN2UW0oDQRREjxkiBNR1iGQRov77HnEHPoKiu1BB3IMSXI5ERSUqKG5AxOfPyIVqaELPq/OXgoaZqeqqnnu7G0Yd40DqvWcaDqk0UVgFXgcMBwPs+QVYqWPcAM48s15BQM/7dqq5pXDm38AWMFYQYIbb0rqQ0rI489kAPxjgMAf8iFvOM7dmvUlkK6dGgGHH60kzJNiU4KqglllBQMPryUZIcCnSVkJEgKEjvksAzyKniQ+YEf8UIr9EtoYIaIn/DJEfIieJx5Q83kPkg0j7zVi05XEfIrsi94cIOJTHeYhMRV4DSYR5AtzKYy3voD1KsBsRsKe5/byDhm5FE/0C8zXMF4A/zV0sE594IZ2SciVauTM/qrIaO/LH3p6/AQ60QyY02mqoq7kzr3RdOyypnlnJ6FcpSx6awDpwAdzpMNqwZ/tmuyW3oaOBf/Skd9yW/QziAAAAAElFTkSuQmCC"
                                />
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}