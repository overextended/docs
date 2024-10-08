(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8642],{3883:function(e,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_core/Classes/Server/OxAccount",function(){return c(1423)}])},1423:function(e,n,c){"use strict";c.r(n),c.d(n,{__toc:function(){return i}});var s=c(2676),l=c(2140),r=c(8745);let i=[{depth:2,value:"OxAccount",id:"oxaccount"},{depth:2,value:"OxAccountMetadata",id:"oxaccountmetadata"},{depth:2,value:"OxAccount.get",id:"oxaccountget"},{depth:2,value:"OxAccount.addBalance",id:"oxaccountaddbalance"},{depth:2,value:"OxAccount.removeBalance",id:"oxaccountremovebalance"},{depth:2,value:"OxAccount.transferBalance",id:"oxaccounttransferbalance"},{depth:2,value:"OxAccount.depositMoney",id:"oxaccountdepositmoney"},{depth:2,value:"OxAccount.withdrawMoney",id:"oxaccountwithdrawmoney"},{depth:2,value:"OxAccount.deleteAccount",id:"oxaccountdeleteaccount"},{depth:2,value:"OxAccount.getCharacterRole",id:"oxaccountgetcharacterrole"},{depth:2,value:"OxAccount.setCharacterRole",id:"oxaccountsetcharacterrole"},{depth:2,value:"OxAccount.playerHasPermission",id:"oxaccountplayerhaspermission"},{depth:2,value:"OxAccount.setShared",id:"oxaccountsetshared"},{depth:2,value:"OxAccount.createInvoice",id:"oxaccountcreateinvoice"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",span:"span",strong:"strong"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"oxaccount",children:"OxAccount"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["accountId",(0,s.jsx)(n.code,{children:" number"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountmetadata",children:"OxAccountMetadata"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["id: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["balance: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["isDefault: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["label?: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["owner?: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["group?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"personal"})," | ",(0,s.jsx)(n.code,{children:"shared"})," | ",(0,s.jsx)(n.code,{children:"group"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountget",children:"OxAccount.get"}),"\n",(0,s.jsx)(n.p,{children:"Get the value of specific key(s) from account metadata."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(key)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["key: ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OxAccountMetadata[key]"})," | ",(0,s.jsx)(n.code,{children:"OxAccountMetadata[key][]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns an array if passing multiple keys."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountaddbalance",children:"OxAccount.addBalance"}),"\n",(0,s.jsx)(n.p,{children:"Add funds to the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"addBalance"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({ amount, message })"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["amount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["message?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'amount_not_number'"})," | ",(0,s.jsx)(n.code,{children:"'no_balance'"})," | ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountremovebalance",children:"OxAccount.removeBalance"}),"\n",(0,s.jsx)(n.p,{children:"Remove funds from the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"removeBalance"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({ amount, message, overdraw })"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["amount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["message?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["overdraw?: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'amount_not_number'"})," | ",(0,s.jsx)(n.code,{children:"'no_balance'"})," | ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccounttransferbalance",children:"OxAccount.transferBalance"}),"\n",(0,s.jsx)(n.p,{children:"Transfer funds to another account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transferBalance"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({ toId, amount, overdraw, message, note, actorId })"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["toId: ",(0,s.jsx)(n.code,{children:"number"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The accountId to transfer funds to."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["amount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["message?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["overdraw?: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["note?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["actorId? ",(0,s.jsx)(n.code,{children:"number"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The charId of the player initiating the transfer."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'amount_not_number'"})," | ",(0,s.jsx)(n.code,{children:"'no_balance'"})," | ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountdepositmoney",children:"OxAccount.depositMoney"}),"\n",(0,s.jsx)(n.p,{children:"Deposit money into the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transferBalance"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, amount, message, note)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["playerId: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["amount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["message?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["note?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'amount_not_number'"})," | ",(0,s.jsx)(n.code,{children:"'insufficient_funds'"})," | ",(0,s.jsx)(n.code,{children:"'no_balance'"})," | ",(0,s.jsx)(n.code,{children:"'no_access'"})," | ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountwithdrawmoney",children:"OxAccount.withdrawMoney"}),"\n",(0,s.jsx)(n.p,{children:"Withdraw money from the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transferBalance"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, amount, message, note)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["playerId: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["amount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["message?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["note?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'amount_not_number'"})," | ",(0,s.jsx)(n.code,{children:"'no_charId'"})," | ",(0,s.jsx)(n.code,{children:"'insufficient_funds'"})," | ",(0,s.jsx)(n.code,{children:"'no_balance'"})," | ",(0,s.jsx)(n.code,{children:"'no_access'"})," | ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountdeleteaccount",children:"OxAccount.deleteAccount"}),"\n",(0,s.jsx)(n.p,{children:"Mark the account as deleted. It can no longer be accessed, but remains in the database."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"deleteAccount"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountgetcharacterrole",children:"OxAccount.getCharacterRole"}),"\n",(0,s.jsx)(n.p,{children:"Get the account access role of a character by charId or stateId."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getCharacterRole"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["id: ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountsetcharacterrole",children:"OxAccount.setCharacterRole"}),"\n",(0,s.jsx)(n.p,{children:"Set the account access role of a character by charId or stateId."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setCharacterRole"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(id, role)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["id: ",(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["role?: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'something_went_wrong'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountplayerhaspermission",children:"OxAccount.playerHasPermission"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a player's active character has permission to perform an action on the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"playerHasPermission"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, permission)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["playerId: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["permission: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountsetshared",children:"OxAccount.setShared"}),"\n",(0,s.jsx)(n.p,{children:"Set the account as shared, allowing permissions to be assigned to other characters."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setShared"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'update_account_error'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"oxaccountcreateinvoice",children:"OxAccount.createInvoice"}),"\n",(0,s.jsx)(n.p,{children:"Create an unpaid invoice on the account."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"account."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"createInvoice"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(invoice)"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["invoice: ",(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["actorId?: number;","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The charId of the player creating the invoice."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["toAccount: number;","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The accountId of the account receiving the invoice."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"amount: number;"}),"\n",(0,s.jsx)(n.li,{children:"message: string;"}),"\n",(0,s.jsx)(n.li,{children:"dueDate: string;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["success: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["message: ",(0,s.jsx)(n.code,{children:"'no_charId'"})," | ",(0,s.jsx)(n.code,{children:"'no_permission'"})," | ",(0,s.jsx)(n.code,{children:"'no_target_account'"})]}),"\n"]}),"\n"]}),"\n"]})]})}n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ox_core/Classes/Server/OxAccount.mdx",route:"/ox_core/Classes/Server/OxAccount",frontMatter:{title:"OxAccount"},timestamp:1728423518e3,title:"OxAccount",headings:i},pageNextRoute:"/ox_core/Classes/Server/OxAccount"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=3883)}),_N_E=e.O()}]);