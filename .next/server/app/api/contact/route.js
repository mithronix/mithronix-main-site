"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},3916:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{POST:()=>u});var o=t(9303),i=t(8716),n=t(3131),a=t(7070),p=t(5245);async function u(e){try{let{name:r,email:t,company:s,product:o,message:i}=await e.json();if(!r||!t||!i)return a.NextResponse.json({error:"Missing required fields"},{status:400});let n=p.createTransport({service:"gmail",auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}}),u={from:process.env.EMAIL_USER,to:"mithronix.ai@gmail.com",replyTo:t,subject:`New Contact Form Submission: ${o}`,text:`
Mithronix Website Inquiry
-------------------------
Name: ${r}
Email: ${t}
Company: ${s||"N/A"}
Product Interest: ${o}

Message:
${i}
            `,html:`
<h3>New Inquiry from Mithronix Website</h3>
<p><strong>Name:</strong> ${r}</p>
<p><strong>Email:</strong> ${t}</p>
<p><strong>Company:</strong> ${s||"N/A"}</p>
<p><strong>Product Interest:</strong> ${o}</p>
<br/>
<p><strong>Message:</strong></p>
<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${i.replace(/\n/g,"<br>")}</p>
            `};return await n.sendMail(u),a.NextResponse.json({success:!0,message:"Email sent successfully"})}catch(e){return console.error("Email send error:",e),a.NextResponse.json({error:e.message||"Failed to send email"},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"D:\\Mithronix\\Website\\Mithronix-MainSite\\src\\app\\api\\contact\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:x,serverHooks:d}=c,m="/api/contact/route";function g(){return(0,n.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:x})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,770],()=>t(3916));module.exports=s})();