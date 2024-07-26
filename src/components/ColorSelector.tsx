import classNames from 'classnames'
import React from 'react'
import { FieldInputProps, FormikContextType, useFormikContext } from 'formik'
import { UsersData } from './Entry'


interface ColorSelectorProps {
    field: FieldInputProps<string>,
    changeColor: (colorId: string) => void
}

const ColorSelector = ({field, changeColor}: ColorSelectorProps) => {
    const formik = useFormikContext<UsersData>()


    const {values} = formik
    

    
    
    const colors: ColorType[] = [
        {
            id: 1,
            color: '#CC0001'
        },
        {
            id: 2,
            color: '#FB940B'
        },
        {
            id: 3,
            color: '#FFFF01'
        }, {
            id: 4,
            color: '#01CC00'
        },{
            id: 5,
            color: '#03C0C6'
        },
        {
            id: 6,
            color: '#0000FE'
        }, {
            id: 7,
            color: "#762CA7"
        }, {
            id: 8,
            color: '#FE98BF'
        }
    ]



    const handleColor = (color: string) => {
        field.name === 'color_1' ? (color !== values.color_2 ? changeColor(color) : null) : (color !== values.color_1 ? changeColor(color) : nullf)
    }
  return (
    <div className='grid grid-cols-4 gap-1  '>
        {colors.map((color: ColorType) => (
            <span key={color.id} onClick={() =>handleColor(color.color)} className={classNames('h-8  cursor-pointer w-full',{
                "border-4 border-blue-500 ": field?.value === color.color
            })} style={{
                background: color.color
            }}/>
                
               
        ))}


    </div>
  )
}

export default ColorSelector



export type ColorType = {
    id: number,
    color: '#CC0001' | '#FB940B' | '#FFFF01' | '#01CC00' | '#03C0C6' | '#0000FE' | '#762CA7' | '#FE98BF'
}