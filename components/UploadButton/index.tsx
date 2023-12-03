import { CloudUploadOutlined } from '@ant-design/icons'
import { Button, Upload, UploadFile, notification } from 'antd'
import React from 'react'
import styles from '@/styles/Home.module.scss';
import * as Api from "@/api";




export const UploadButton: React.FC = () => {

  const [fileList, setFileList] = React.useState<UploadFile[]>([])

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options)

      setFileList([]);

      window.location.reload();

    } catch (error) {
      notification.error({
          message: "Ошибка!",
          description: "Не удалось загрузить фйал",
          duration: 2,
      })
    }
  }


  return (
    <Upload
        customRequest={onUploadSuccess}
        fileList={fileList}
        onChange={({ fileList }) => setFileList(fileList)}
        className={styles.upload}
    >
        <Button type='primary' icon={<CloudUploadOutlined/>} size='large'>
           Загрузить файл
        </Button>
    </Upload>
  )
}
