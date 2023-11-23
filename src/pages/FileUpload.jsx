import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default function FileUpload() {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const credString = localStorage.Credentials
    const cred = JSON.parse(credString)
    console.log(cred)
    setUrl(cred.profilePicture)
  }, [])

  const handleImageUpload = async (e) => {
    const credString = localStorage.Credentials
    const cred = JSON.parse(credString)

    const img = e.target.files[0]
    console.log(cred.email)
    const getData = await axios.get(
      `http://localhost:3001/users?email=${cred.email}`
    )
    console.log(getData.data)
    const reader = new FileReader()
    reader.onloadend = async () => {
      const base64Data = reader.result
      // console.log(reader.result)
      setUrl(reader.result)

      const updatedData = {
        ...getData.data[0],
        profilePicture: base64Data,
      }
      console.log(updatedData)
      try {
        const response = await axios.put(
          `http://localhost:3001/users/${updatedData.id}/`,
          updatedData
        )

        console.log('File upload successful:', response.data)
      } catch (error) {
        console.error('Error updating data:', error)
      }
    }

    reader.readAsDataURL(img)
  }

  return (
    <>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
      </Button>

      <img src={url} alt="" />
    </>
  )
}
