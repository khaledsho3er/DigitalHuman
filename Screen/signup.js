import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';


const Signup = ({navigation}) => {
    const [isPasswordShown,setIsPassword]= useState(false);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary}}>
            <View style={{flex:1,marginHorizontal:22}}>
                <Text style={{
                    fontSize:22,
                    fontWeight:'bold',
                    marginVertical:12,
                    color:COLORS.white
                }}>
                    Create An Account
                </Text>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        marginTop:10,
                        color:COLORS.white
                        }}>
                            Email Address
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='Enter Your Email' placeholderTextColor={COLORS.white}
                            keyboardType='email-address'
                            style={{
                                width:"100%"
                            }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        color:COLORS.white

                        }}>
                            First Name
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='Enter Your First Name' placeholderTextColor={COLORS.white}
                            keyboardType='username'
                            style={{
                                width:"100%",
                                color:COLORS.white
                            }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        color:COLORS.white

                        }}>
                            Last Name
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='Enter Your Last Name' placeholderTextColor={COLORS.white}
                            keyboardType='username'
                            style={{
                                width:"100%",
                                color:COLORS.white
                            }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        color:COLORS.white

                        }}>
                            Username
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='Enter Your username' placeholderTextColor={COLORS.white}
                            keyboardType='username'
                            style={{
                                width:"100%",
                                color:COLORS.white
                            }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        color:COLORS.white
                        }}>
                            Phone Number
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='+20' placeholderTextColor={COLORS.white}
                            keyboardType='numeric'
                            style={{
                                width:"12%",
                                borderWidth:1,
                                borderLeftColor: COLORS.grey,
                                height:"100%",
                        color:COLORS.white
                            }}
                            />
                             <TextInput 
                                placeholder='Enter Your Phone Number' 
                                placeholderTextColor={COLORS.white}
                                keyboardType='numeric'
                                style={{
                                     width:"80%",
                            }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                        color:COLORS.white
                        }}>
                            Password
                    </Text>
                    <View style={{
                        width:"100%",
                        height:50,
                        borderColor:COLORS.white,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }}>
                            <TextInput placeholder='Enter Your Password' placeholderTextColor={COLORS.white}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width:"100%"
                            }}
                            />
                            <TouchableOpacity
                            onPress={()=>setIsPassword(!isPasswordShown)}
                             style={{position:"absolute",right:12}}>
                                {
                                isPasswordShown==true?(
                                    <Ionicons name='eye-off' size={22} color={COLORS.white}/>

                                ):(
                                    <Ionicons name='eye' size={22} color={COLORS.white}/>

                                )
}
                            </TouchableOpacity>
                    </View>
                </View>
                <Button 
                title="Sign Up"
                style={{marginTop:40,marginBottom:4,}}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent:"center",
                    marginVertical:22,
                    }}>
                    <Text style={{color:COLORS.white,fontSize:16}}>
                        Already have an account?
                    </Text>
                    <Pressable onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={{color:COLORS.grey,fontSize:16,fontWeight:"bold",marginLeft:6 ,textDecorationLine: 'underline'}}>
                            Login
                        </Text>
                        </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default Signup;
