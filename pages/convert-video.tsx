import { useState, useEffect } from 'react';

import type { NextPage } from 'next';

import { ToastContainer, toast } from 'react-toastify';

import socketClient from 'socket.io-client';

import api from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

const ConvertVideo: NextPage = () => {

    const [video, setVideo] = useState<any>(null);
    const [formatOutput, setFormatOutput] = useState<string>('');
    const [socketId, setSocketId] = useState<string>('');
    const [convertPercentage, setConvertPercentage] = useState<number>(0);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [loadingButton, setLoadingButton] = useState<boolean>(false);
    const [step, setStep] = useState<string>('Convert');
    const [convertedFile, setConvertedFile] = useState<string>('');
    const [preparingFile, setPreparingFile] = useState<string>('');

    const handleConvertVideo = async () => {
        setLoadingButton(true);

        const formData = new FormData();

        if (video.size > 10000000) {
            toast.error(`File too large, max 10MB`, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });

            setLoadingButton(false);

            return;
        }


        formData.append('file', video);
        formData.append('socketId', socketId);
        formData.append('formatOutput', formatOutput);

        await api.post('convert-video', formData, {
            onUploadProgress: data => {
                setStep('Uploading...')
                setUploadProgress(Math.round((100 * data.loaded) / data.total));
            }
        }).then(() => {
            setLoadingButton(false);
            setUploadProgress(0);
        });
    }

    useEffect(() => {
        const socket = socketClient('http://localhost:2000', { path: '/api/tool-box-virtual/ws', transports: ['websocket'] });

        socket.on('percentage', (data) => {
            setLoadingButton(true);
            setStep('Converting...');
            setConvertPercentage(data);
        });

        socket.on('user-id', data => {
            setSocketId(data);
        });

        socket.on('converted', () => {
            setLoadingButton(false);
            setConvertPercentage(0);
            setConvertedFile('');
        });

        socket.on('converted-video', (data) => {
            setConvertedFile(data)
        });

        socket.on('preparing-file', (data) => {
            setPreparingFile(data);
            if (data === 'OK') {
                setStep('Convert');
            }
        });

        socket.on('error-in-conversion', (data) => {
            toast.error(data, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });
            setStep('Convert');
        });


    }, []);

    return (
        <div className="py-8 mx-auto px-5">
            <div className="card w-full bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title flex flex-col items-center sm:items-start">Convert your videos</h2>
                    <div className="mt-5 flex items-center sm:flex-row flex-col">
                        <div className="sm:mr-5">
                            <label htmlFor="videoInput" className="btn mb-5 sm:mb-0">Select video</label>
                            <input id="videoInput" type="file" className="hidden" onChange={(e: any) => setVideo(e.target.files[0])} />
                        </div>
                        <p>{video ? video.name : ''}</p>
                    </div>
                    {preparingFile === '...' ?
                        <div className="flex flex-col items-center mt-5">
                            <div style={{ borderTopColor: 'transparent' }} className="w-12 h-12 border-4 border-pink-400 border-solid rounded-full animate-spin"></div>
                            <p className="mt-3">Preparing video...</p>
                        </div> : null}
                    {convertedFile ?
                        <div className="flex justify-center">
                            <a className="btn" href={convertedFile} rel="noreferrer" download target="_blank">Download</a>
                        </div>
                        : null}
                    <div>
                        <h1 className="text-lg font-bold my-5">Output format</h1>
                        <select className="select select-bordered w-full sm:w-60" defaultValue={"Format"} onChange={(e: any) => setFormatOutput(e.target.value)}>
                            <option disabled>Format</option>
                            <optgroup label="Video">
                                <option value="mp4">MP4</option>
                                <option value="avi">AVI</option>
                                <option value="flv">FLV</option>
                                <option value="mpeg">MPEG</option>
                            </optgroup>
                            <optgroup label="Audio">
                                <option value="mp3">MP3</option>
                                <option value="wav">WAV</option>
                                <option value="mp2">MP2</option>
                            </optgroup>
                        </select>
                    </div>
                    {convertPercentage > 0 ? <progress className="progress w-full my-5 progress-primary" value={convertPercentage} max="100"></progress> : null}
                    {uploadProgress > 0 ? <progress className="progress w-full my-5 progress-primary" value={uploadProgress} max="100"></progress> : null}
                    <div className="card-actions justify-end">
                        <button className={`${loadingButton ? 'loading' : null} btn`} disabled={step === 'Convert' && video && formatOutput ? false : true} onClick={handleConvertVideo}>{step}</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ConvertVideo;