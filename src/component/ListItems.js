import React from 'react'
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
} 
from 'react-native'
import { windowWidth } from '../utils/Dimensions'


export default function ListItems({photo,title,subtitle,isFree,price}) {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    }}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <Image 
                source={photo} 
                style={{
                    width: 55,
                    height: 55,
                    borderRadius:10,
                    marginRight: 8,
                }}
            />
            <View style={{width: windowWidth - 220}}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 14,
                }}>{subtitle}</Text>
                <Text 
                numberOfLines={1}
                style={{
                    color: '#FFF',
                    fontSize: 14,
                    textTransform: 'uppercase',
                }}>{title}</Text>
            </View>
        </View>

        <TouchableOpacity style={{
            backgroundColor: '#33873F',
            padding: 10,
            width: 100,
            borderRadius: 10,
        }}>
            <Text style={{
                color: '#FFF',
                textAlign: 'center',
                // fontSize: 14,
            }}>
                {isFree == 'Yes' && 'Play'}
                {isFree == 'No' && price}
            </Text>
        </TouchableOpacity>
    </View>
  )
}