import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

type JsonFileUploaderProps = {
  onJsonDataChange: (data: [JsonData] | null, filename: string) => void;
};

interface JsonData {
    question: string;
    answer: string[];
  }

const JsonFileUploader: React.FC<JsonFileUploaderProps> = ({ onJsonDataChange }) => {
  const [filename, setFilename] = useState<string>(''); // State to store the filename

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFilename(file.name); // Set the filename in the state

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsedData = JSON.parse(reader.result as string);
        onJsonDataChange(parsedData, file.name); // Send data and filename to the parent component
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };

    reader.readAsText(file);
  }, [onJsonDataChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>
            {filename && ("Betand geselecteerd: " + filename)}
            {!filename && ("Drag & drop a JSON file here, or click to select one")}
        </p>
      </div>
    </div>
  );
};

const dropzoneStyles: React.CSSProperties = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default JsonFileUploader;
