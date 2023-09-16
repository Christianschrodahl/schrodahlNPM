<template>
    <c-container margin-top="60px">
        <c-text as="span" color="white" padding="16px">Velg signeringsmetode</c-text>
        <c-card  border-top="solid 1px lightblue!important" border-radius="0px!important" border-color="#455F7A!important" border="none!important" border-style="none" >
            <c-card-title>BankID</c-card-title>
            <c-card-content v-row:no-margin>
                <c-text v-col="'xs6'" as="p">Norsk elektronisk ID</c-text>
                
                <c-button  variant="primary" rounded position="absolute" right="10px" top="30%" @click="()=> $router.push('/')" as="img" src="https://www.bits.no/wp-content/uploads/2016/05/eksport_bank-id-logo.png" width="100px" height="60px"></c-button>
            </c-card-content>
        </c-card>
        <c-card  border-top="solid 1px lightblue!important" border-radius="0px!important" border-color="#455F7A!important" border="none!important" border-style="none" >
            <c-card-title>MitID</c-card-title>
            <c-card-content v-row:no-margin>
                <c-text v-col="'xs6'" as="p">Dansk elektronisk ID</c-text>
                <c-button  variant="primary" position="absolute" right="10px" top="30%" @click="()=> $router.push('/')" >Signer</c-button>
            </c-card-content>
        </c-card>
    </c-container>
</template>