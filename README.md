# CryptoBOT Interaction
###### BUIDL Labs Project

### CryptoBOT Interface
![](https://i.imgur.com/Ax0vQOW.png)


### Tezos SmartPY deployment on Carthagenet
##### Contract Address : KT1DsT31zAR27hVx2T4oWRFhipXnuuSDPiDM 

##### Check out the contract at : https://carthagenet.tzstats.com/KT1DsT31zAR27hVx2T4oWRFhipXnuuSDPiDM
![](https://i.imgur.com/H8SZ2To.png)


 ---------------
### Entry Points in Contract:

```Params :  { name: undefined, type: 'string' }

Name : change_name 
Structure : (Left (Left $PARAM)) 
Sample Invocation : (Left (Left "Tacos"))



Params :  { name: undefined, type: 'int' }
Name : move_horizontally 
Structure : (Left (Right $PARAM)) 
Sample Invocation : (Left (Right -1))



Params :  { name: undefined, type: 'nat' }
Name : move_vertically 
Structure : (Right (Left $PARAM)) 
Sample Invocation : (Right (Left 99))



Params :  { name: undefined, type: 'string' }
Name : shoot_alien 
Structure : (Right (Right $PARAM)) 
Sample Invocation : (Right (Right "Tacos"))
```

