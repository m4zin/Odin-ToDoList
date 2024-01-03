(()=>{"use strict";function e(){const e=document.querySelector(".add-task-and-list");document.querySelector(".add-task-form").style.display="none",e.style.display="grid"}function t(e,t,n,c){this.title=e,this.desc=t,this.date=n,this.priority=c}document.querySelector(".add-task-btn").addEventListener("click",(function(e){const t=document.querySelector(".add-task-and-list"),n=document.querySelector(".add-task-form");t.style.display="none",n.style.display="flex"})),document.querySelector(".go-back").addEventListener("click",e),document.querySelector(".task-submit-btn").addEventListener("click",(()=>{(function(){let e=function(){let e=document.getElementById("title").value,n=document.getElementById("description").value,c=document.getElementById("date").value;return""==e&&(e="Empty"),""==n&&(n="Empty"),""==c&&(c="date not mentioned."),new t(e,n,c,document.getElementById("priority").value)}();const n=document.querySelector(".list-of-tasks"),c=document.createElement("div");c.className="task";const a=document.createElement("div");a.className="title-desc-date";const s=document.createElement("h2");s.className="task-name",s.innerHTML=e.title;const l=document.createElement("h3");l.className="task-desc",l.innerHTML=e.desc;const o=document.createElement("p");o.className="task-due-date",o.innerHTML=`Due ${e.date}`,a.append(s,l,o);const r=document.createElement("div");r.className="checkbox-priority-del";const d=document.createElement("div");d.className="checkbox-div";const i=document.createElement("input");i.type="checkbox",d.name="checkbox",d.id="checkbox";const u=document.createElement("label");u.innerHTML="Done",u.htmlFor="checkbox",d.append(i,u);const m=document.createElement("p");m.className="priority-level",m.innerHTML=`${e.priority} priority`;const y=document.createElement("button");y.className="del-task-btn",y.innerHTML="Delete";const k=document.createElement("button");k.className="edit-task-btn",k.innerHTML="Edit",r.append(d,m,y,k),c.append(a,r),n.append(c)})(),e()})),document.querySelector(".list-of-tasks").addEventListener("click",(function(e){const t=document.querySelector(".add-task-and-list"),n=document.querySelector(".edit-task-info"),c=e.target.closest(".task");if("del-task-btn"==e.target.className&&c.remove(),"edit-task-btn"==e.target.className){let e=function(e){return{taskTitle:e.querySelector(".task-name").innerHTML,taskDesc:e.querySelector(".task-desc").innerHTML,taskDueDate:e.querySelector(".task-due-date").innerHTML,taskPriority:e.querySelector(".priority-level").innerHTML}}(c);const a=document.getElementById("editedTitle");a.value=e.taskTitle;const s=document.getElementById("editedDesc");s.value=e.taskDesc;const l=document.getElementById("editedDate");l.value=e.taskDueDate.slice(4);const o=document.getElementById("editedPriority");"low"==e.taskPriority.slice(0,3)?o.value=e.taskPriority.slice(0,3):"medium"==e.taskPriority.slice(0,6)?o.value=e.taskPriority.slice(0,6):"high"==e.taskPriority.slice(0,4)&&(o.value=e.taskPriority.slice(0,4)),document.querySelector(".edit-task-submit-btn").addEventListener("click",(()=>{a.value&&s.value&&l.value&&o.value&&function(e,t,n,c,a){const s=a.querySelector(".task-name"),l=a.querySelector(".task-desc"),o=a.querySelector(".task-due-date"),r=a.querySelector(".priority-level");s.innerHTML=e.value,l.innerHTML=t.value,o.innerHTML=`Due ${n.value}`,r.innerHTML=`${c.value} priority`}(a,s,l,o,c),t.style.display="grid",n.style.display="none"})),t.style.display="none",n.style.display="flex"}})),document.querySelector(".tasks-and-projects").addEventListener("click",(function(e){const t=document.querySelector(".type-proj-name");if(10!=document.querySelector(".added-projects").childElementCount){if("add-proj-btn"==e.target.className&&(t.style.display="flex"),"submit-btn-proj"==e.target.className){const e=document.getElementById("projName").value;t.style.display="none",function(e){const t=document.querySelector(".added-projects");if(10==t.childElementCount)return;const n=document.createElement("button");n.className="Project",n.innerHTML=e,t.appendChild(n)}(e)}}else document.querySelector(".output-error").style.display="block"}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQy9CLENBd0JRRSxDQUFpQkosRUFDckIsT0Fmd0I5RCxTQUFTQyxjQUFjLGlCQUMvQkMsTUFBTUMsUUFBVSxPQWdCcEMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9oYW5kbGVGb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNlbmRUYXNrRm9ybShlKSB7XG4gICAgLy8gQm94IGluIG1haW4gY29udGVudCBhcmVhLlxuICAgIGNvbnN0IGFkZFRhc2tBbmRMaXN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWFuZC1saXN0JylcbiAgICAvLyBGb3JtIHRvIGZpbGwgdGhlIHRhc2sgaW5mb3JtYXRpb24uXG4gICAgY29uc3QgZm9ybUluZm9GaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuXG4gICAgLy8gV2hlbiBhZGQgdGFzayBpcyBjbGlja2VkLCBoaWRlIHRoZSBib3ggJiBkaXNwbGF5IGZvcm0uXG4gICAgYWRkVGFza0FuZExpc3RCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGZvcm1JbmZvRmlsbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG59XG5cbmZ1bmN0aW9uIGdvQmFja1RvSW5kZXgoKSB7XG4gICAgY29uc3QgYWRkVGFza0FuZExpc3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYW5kLWxpc3QnKVxuICAgIGNvbnN0IGZvcm1JbmZvRmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcblxuICAgIGZvcm1JbmZvRmlsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgYWRkVGFza0FuZExpc3RCb3guc3R5bGUuZGlzcGxheSA9ICdncmlkJyAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybVRhc2tJbmZvKCkge1xuICAgIGxldCB0aXRsZVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG4gICAgbGV0IGRlc2NWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGxldCBkYXRlVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZVxuICAgIGxldCBwcmlvcml0eVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG5cbiAgICBpZih0aXRsZVZhbCA9PSAnJykge1xuICAgICAgICB0aXRsZVZhbCA9ICdFbXB0eSdcbiAgICB9IFxuICAgIFxuICAgIGlmKGRlc2NWYWwgPT0gJycpIHtcbiAgICAgICAgZGVzY1ZhbCA9ICdFbXB0eSdcbiAgICB9XG5cbiAgICBpZihkYXRlVmFsID09ICcnKSB7XG4gICAgICAgIGRhdGVWYWwgPSAnZGF0ZSBub3QgbWVudGlvbmVkLidcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrID0gbmV3IGNyZWF0ZVRhc2soXG4gICAgICAgIHRpdGxlVmFsLFxuICAgICAgICBkZXNjVmFsLFxuICAgICAgICBkYXRlVmFsLFxuICAgICAgICBwcmlvcml0eVZhbFxuICAgIClcblxuICAgIHJldHVybiB0YXNrXG59XG5cbmV4cG9ydCB7c2VuZFRhc2tGb3JtLCBnb0JhY2tUb0luZGV4LCBnZXRGb3JtVGFza0luZm99IiwiaW1wb3J0IHtzZW5kVGFza0Zvcm0sIGdvQmFja1RvSW5kZXh9IGZyb20gJy4vaGFuZGxlRm9ybS5qcydcbmltcG9ydCB7Y3JlYXRlVGFzaywgVGFza0RlbGV0ZUFuZEVkaXRGb3JtfSAgZnJvbSAnLi90YXNrcy5qcydcbmltcG9ydCB7IGdldFByb2pOYW1lIH0gZnJvbSAnLi9wcm9qZWN0cy5qcydcblxuLy8gU2VuZHMgYSBmb3JtIHRvIGZpbGwgaW5mbyBmb3IgbmV3IHRhc2suXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpXG5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZFRhc2tGb3JtKVxuXG4vLyBHb2VzIGJhY2sgdG8gbWFpbiBwYWdlIHdoaWxzdCBhZGRpbmcgdGFzay5cbmNvbnN0IGdvQmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nby1iYWNrJylcbmdvQmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQmFja1RvSW5kZXgpXG5cbi8vIEFkZGluZyB0YXNrIHRvIGxpc3RcbmNvbnN0IGFkZFRhc2tUb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQtYnRuJylcbmFkZFRhc2tUb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlVGFzaygpXG4gICAgZ29CYWNrVG9JbmRleCgpXG59KVxuXG4vLyBIYW5kbGluZyBkZWxldGlvbiBvZiB0YXNrc1xuLy8gRG9pbmcgaXQgdGhpcyB3YXkgYmVjYXVzZSBkZWxldGUgYnV0dG9uIG5vdCBhZGRlZCAtXG4vLyBVbnRpbCB0YXNrIGlzIGFkZGVkLlxuY29uc3QgcGFyZW50RWxlbU9mTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW9mLXRhc2tzJylcbnBhcmVudEVsZW1PZkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUYXNrRGVsZXRlQW5kRWRpdEZvcm0pXG5cbmNvbnN0IHBhcmVudEVsZW1PZkFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtYW5kLXByb2plY3RzJylcbnBhcmVudEVsZW1PZkFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRQcm9qTmFtZSlcblxuLy8gV2hhdCBpcyBsZWZ0P1xuICAgIC8vIEFkZGl0aW9uIG9mIHByb2plY3RzLCBlYWNoIHByb2plY3QgY2FuIGNvbnRhaW4gaXQncyBvd24gdGFza3MgYWRkZWQgYnkgdXNlci5cbi8vIEhvdyBkbyB3ZSBnbyBhYm91dCBpdD9cbiAgICAvLyBGaXJzdCB0aGUgdXNlciBjcmVhdGVzIGEgcHJvamVjdCBhbmQgbmFtZXMgaXQuXG4gICAgLy8gVGhlbiB0aGUgdXNlciB3aWxsIGhhdmUgdGhlIHNhbWUgZnVuY3Rpb25hbGl0eSB0aGV5IGhhZCBpbiBjcmVhdGluZyAtXG4gICAgLy8gVGFza3MgZm9yIHRvZGF5LCBidXQgZm9yIGVhY2ggbmV3IHByb2plY3QgaW5zdGVhZC5cbiAgICAvLyBNYWluIHRoaW5nIHRvIGNvbnNpZGVyIGlzIGhvdyB0byBpbXBsZW1lbnQgaXQgc28gdGhhdCwgZWFjaCBwcm9qZWN0IHdpbGwgLVxuICAgIC8vIGNvbnRhaW4gaXQncyBvd24gc2V0IG9mIHRhc2tzIHRoYXQgdGhlIHVzZXIgY3JlYXRlcy5cbiAgICAvLyBBbHNvIGZpZ3VyZSBvdXQgaG93IHdlIGNhbiByZS11c2UgdGhlIGNvZGUgd2UgY3JlYXRlZCB0aWxsIG5vdyBmb3IgaXQsXG4gICAgLy8gd2l0aG91dCBoYXZpbmcgdG8gY3JlYXRlIG5ldyBmaWxlcyBhbmQgc2hpdC5cblxuXG4iLCJpbXBvcnQgeyBnZXRGb3JtVGFza0luZm8gfSBmcm9tIFwiLi9oYW5kbGVGb3JtXCJcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAvLyBJbmZvIGZyb20gZm9ybVxuICAgIGxldCBmb3JtSW5mbyA9IGdldEZvcm1UYXNrSW5mbygpXG5cbiAgICAvLyBUaGUgbGlzdCB3aGljaCB0aGUgdGFzayB3aWxsIGJlIGFwcGVuZGVkIHRvLlxuICAgIGNvbnN0IGxpc3RPZlRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Qtb2YtdGFza3MnKVxuXG4gICAgLy8gVGhlIHRhc2sgaXRzZWxmLlxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2suY2xhc3NOYW1lID0gJ3Rhc2snXG5cbiAgICAvLyB0aXRsZSwgZGVzYyAmIGRhdGUgb2YgdGFzay5cbiAgICBjb25zdCB0aXRsZURlc2NEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURlc2NEYXRlLmNsYXNzTmFtZSA9ICd0aXRsZS1kZXNjLWRhdGUnXG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLW5hbWUnXG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IGZvcm1JbmZvLnRpdGxlXG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0YXNrRGVzYy5jbGFzc05hbWUgPSAndGFzay1kZXNjJ1xuICAgIHRhc2tEZXNjLmlubmVySFRNTCA9IGZvcm1JbmZvLmRlc2NcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGFza0RhdGUuY2xhc3NOYW1lID0gJ3Rhc2stZHVlLWRhdGUnXG4gICAgdGFza0RhdGUuaW5uZXJIVE1MID0gYER1ZSAke2Zvcm1JbmZvLmRhdGV9YFxuXG4gICAgdGl0bGVEZXNjRGF0ZS5hcHBlbmQoXG4gICAgICAgIHRhc2tUaXRsZSxcbiAgICAgICAgdGFza0Rlc2MsXG4gICAgICAgIHRhc2tEYXRlXG4gICAgKVxuXG4gICAgLy8gQ2hlY2tib3gsIHByaW9yaXR5ICYgZGVsZXRpb24gb2YgdGFzay5cbiAgICBjb25zdCBjaGVja1ByaW9yRGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja1ByaW9yRGVsLmNsYXNzTmFtZSA9ICdjaGVja2JveC1wcmlvcml0eS1kZWwnXG5cbiAgICAvLyBGb3IgY2hlY2JveFxuICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveERpdi5jbGFzc05hbWUgPSAnY2hlY2tib3gtZGl2J1xuXG4gICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgY2hlY2tib3hEaXYubmFtZSA9ICdjaGVja2JveCdcbiAgICBjaGVja2JveERpdi5pZCA9ICdjaGVja2JveCdcblxuICAgIGNvbnN0IGxhYmVsRm9yQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxGb3JDaGVja2JveC5pbm5lckhUTUwgPSAnRG9uZSdcbiAgICBsYWJlbEZvckNoZWNrYm94Lmh0bWxGb3IgPSAnY2hlY2tib3gnXG5cbiAgICBjaGVja2JveERpdi5hcHBlbmQoXG4gICAgICAgIGNoZWNrYm94SW5wdXQsXG4gICAgICAgIGxhYmVsRm9yQ2hlY2tib3hcbiAgICApXG5cbiAgICAvLyBQcmlvcml0eSBsZXZlbFxuICAgIGNvbnN0IHByaW9yaXR5THZsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJpb3JpdHlMdmwuY2xhc3NOYW1lID0gJ3ByaW9yaXR5LWxldmVsJ1xuICAgIHByaW9yaXR5THZsLmlubmVySFRNTCA9IGAke2Zvcm1JbmZvLnByaW9yaXR5fSBwcmlvcml0eWBcblxuICAgIC8vIERlbGV0ZSBidXR0b24gZm9yIHRhc2tcbiAgICBjb25zdCB0YXNrRGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0YXNrRGVsQnRuLmNsYXNzTmFtZSA9ICdkZWwtdGFzay1idG4nXG4gICAgdGFza0RlbEJ0bi5pbm5lckhUTUwgPSAnRGVsZXRlJ1xuXG4gICAgLy8gRWRpdCBidXR0b24gZm9yIHRhc2tcbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdGFza0VkaXRCdG4uY2xhc3NOYW1lID0gJ2VkaXQtdGFzay1idG4nXG4gICAgdGFza0VkaXRCdG4uaW5uZXJIVE1MID0gJ0VkaXQnXG5cbiAgICBjaGVja1ByaW9yRGVsLmFwcGVuZChcbiAgICAgICAgY2hlY2tib3hEaXYsXG4gICAgICAgIHByaW9yaXR5THZsLFxuICAgICAgICB0YXNrRGVsQnRuLFxuICAgICAgICB0YXNrRWRpdEJ0blxuICAgIClcblxuICAgIHRhc2suYXBwZW5kKFxuICAgICAgICB0aXRsZURlc2NEYXRlLFxuICAgICAgICBjaGVja1ByaW9yRGVsXG4gICAgKVxuXG4gICAgbGlzdE9mVGFza3MuYXBwZW5kKFxuICAgICAgICB0YXNrXG4gICAgKVxufVxuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGRlbGV0ZSBidXR0b24gY2xpY2tcbmZ1bmN0aW9uIFRhc2tEZWxldGVBbmRFZGl0Rm9ybShlKSB7XG4gICAgLy8gQm94IGluIG1haW4gY29udGVudCBhcmVhLlxuICAgIGNvbnN0IGFkZFRhc2tBbmRMaXN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWFuZC1saXN0JylcbiAgICAvLyBGb3JtIHRvIGZpbGwgdGhlIHRhc2sgaW5mb3JtYXRpb24uXG4gICAgY29uc3QgZWRpdFRhc2tJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1pbmZvJylcbiAgICAvLyBDbG9zZXMgdGFzayBpdGVtIHRvIGNsaWNrZWQgdGFyZ2V0LlxuICAgIGNvbnN0IHRhc2tJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcblxuICAgIC8vIERlbGV0aW9uIG9mIHRhc2suXG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZWwtdGFzay1idG4nKSB7XG4gICAgICAgIHRhc2tJdGVtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEVkaXRpbmcgb2YgdGFzay5cbiAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXQtdGFzay1idG4nKSB7XG5cbiAgICAgICAgbGV0IHByZXZUYXNrSW5mbyA9IHJldHJpZXZlUHJldlRhc2tJbmZvKHRhc2tJdGVtKVxuXG4gICAgICAgIC8vIFB1dHRpbmcgb2xkIHZhbHMgaW50byBlZGl0aW5nIGZvcm1cbiAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0ZWRUaXRsZScpXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBwcmV2VGFza0luZm8udGFza1RpdGxlXG4gICAgICAgIC8vIERlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0ZWREZXNjJylcbiAgICAgICAgaW5wdXREZXNjLnZhbHVlID0gcHJldlRhc2tJbmZvLnRhc2tEZXNjXG4gICAgICAgIC8vIERhdGVcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRlZERhdGUnKVxuICAgICAgICBpbnB1dERhdGUudmFsdWUgPSBwcmV2VGFza0luZm8udGFza0R1ZURhdGUuc2xpY2UoNClcbiAgICAgICAgLy8gUHJpb3JpdHlcbiAgICAgICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0ZWRQcmlvcml0eScpXG5cbiAgICAgICAgaWYocHJldlRhc2tJbmZvLnRhc2tQcmlvcml0eS5zbGljZSgwLCAzKSA9PSAnbG93Jykge1xuICAgICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSA9IHByZXZUYXNrSW5mby50YXNrUHJpb3JpdHkuc2xpY2UoMCwgMylcbiAgICAgICAgfSBlbHNlIGlmKHByZXZUYXNrSW5mby50YXNrUHJpb3JpdHkuc2xpY2UoMCwgNikgPT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGlucHV0UHJpb3JpdHkudmFsdWUgPSBwcmV2VGFza0luZm8udGFza1ByaW9yaXR5LnNsaWNlKDAsIDYpXG4gICAgICAgIH0gZWxzZSBpZihwcmV2VGFza0luZm8udGFza1ByaW9yaXR5LnNsaWNlKDAsIDQpID09ICdoaWdoJykge1xuICAgICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSA9IHByZXZUYXNrSW5mby50YXNrUHJpb3JpdHkuc2xpY2UoMCwgNClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBmaW5pc2hpbmcgZWRpdCBidXR0b24gZm9yIHRhc2tcbiAgICAgICAgY29uc3QgZmluaXNoRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stc3VibWl0LWJ0bicpXG4gICAgICAgIGZpbmlzaEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihpbnB1dFRpdGxlLnZhbHVlICYmIGlucHV0RGVzYy52YWx1ZSAmJiBcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUudmFsdWUgJiYgaW5wdXRQcmlvcml0eS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICBzZXRFZGl0ZWRUYXNrSW5mbyhpbnB1dFRpdGxlLCBpbnB1dERlc2MsIGlucHV0RGF0ZSwgaW5wdXRQcmlvcml0eSwgdGFza0l0ZW0pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFza0FuZExpc3RCb3guc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xuICAgICAgICAgICAgZWRpdFRhc2tJbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcblxuICAgICAgICBhZGRUYXNrQW5kTGlzdEJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGVkaXRUYXNrSW5mby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRFZGl0ZWRUYXNrSW5mbyhlZGl0ZWRUaXRsZSwgZWRpdGVkRGVzYywgZWRpdGVkRGF0ZSwgZWRpdGVkUHJpb3JpdHksIHRhc2tJdGVtKSB7XG4gICAgLy8gVGFzayBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpXG4gICAgLy8gVGFzayBkZXNjXG4gICAgY29uc3QgZGVzYyA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKVxuICAgIC8vIFRhc2sgZHVlIGRhdGVcbiAgICBjb25zdCBkYXRlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKVxuICAgIC8vIFRhc2sgcHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1sZXZlbCcpXG5cbiAgICAvLyBOb3cgdXBkYXRpbmcgbmV3bHkgZWRpdGVkIGluZm8uXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gZWRpdGVkVGl0bGUudmFsdWVcbiAgICBkZXNjLmlubmVySFRNTCA9IGVkaXRlZERlc2MudmFsdWVcbiAgICBkYXRlLmlubmVySFRNTCA9IGBEdWUgJHtlZGl0ZWREYXRlLnZhbHVlfWBcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgJHtlZGl0ZWRQcmlvcml0eS52YWx1ZX0gcHJpb3JpdHlgXG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUHJldlRhc2tJbmZvKHRhc2tJdGVtKSB7XG4gICAgLy8gR2V0dGluZyBwcmV2aW91cyBpbmZvcm1hdGlvblxuICAgIC8vIFRhc2sgVGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykuaW5uZXJIVE1MXG4gICAgLy8gVGFzayBkZXNjXG4gICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjJykuaW5uZXJIVE1MXG4gICAgLy8gVGFzayBkdWUgZGF0ZVxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKS5pbm5lckhUTUxcbiAgICAvLyBUYXNrIHByaW9yaXR5XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWxldmVsJykuaW5uZXJIVE1MXG5cbiAgICByZXR1cm4ge3Rhc2tUaXRsZSwgdGFza0Rlc2MsIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHl9XG59XG5cbmV4cG9ydCB7Y3JlYXRlVGFzaywgVGFza0RlbGV0ZUFuZEVkaXRGb3JtfSIsImZ1bmN0aW9uIGFkZFByb2pUb1NpZGVCYXIocHJvak5hbWUpIHtcbiAgICAvLyBQYXJlbnQgdG8gYXBwZW5kIHRoZSBwcm9qZWN0IHRvXG4gICAgY29uc3QgcGFyZW50UHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkZWQtcHJvamVjdHMnKVxuXG4gICAgaWYocGFyZW50UHJvakxpc3QuY2hpbGRFbGVtZW50Q291bnQgPT0gMTApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVGhlIG5ldyBwcm9qZWN0XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbmV3UHJvai5jbGFzc05hbWUgPSAnUHJvamVjdCdcbiAgICBuZXdQcm9qLmlubmVySFRNTCA9IHByb2pOYW1lXG5cbiAgICBwYXJlbnRQcm9qTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qTmFtZShlKSB7XG4gICAgLy8gaW5wdXR0aW5nIHByb2plY3QgbmFtZS5cbiAgICBjb25zdCBhZGRQcm9qSW5TaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUtcHJvai1uYW1lJylcblxuICAgIC8vIENoZWNrIG51bWJlciBvZiBwcm9qZWN0cyBsZW5ndGguXG4gICAgY29uc3QgcGFyZW50UHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkZWQtcHJvamVjdHMnKVxuXG4gICAgaWYocGFyZW50UHJvakxpc3QuY2hpbGRFbGVtZW50Q291bnQgPT0gMTApIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0cHV0LWVycm9yJylcbiAgICAgICAgb3V0cHV0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIC8vIERpc3BsYXkgaW5wdXQgZm9yIGVudGVyaW4gcHJvamVjdCBuYW1lLlxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnYWRkLXByb2otYnRuJykgeyAgIFxuICAgICAgICBhZGRQcm9qSW5TaWRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICB9XG5cbiAgICAvLyBHZXR0aW5nIHByb2plY3QgbmFtZS5cbiAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3N1Ym1pdC1idG4tcHJvaicpIHtcbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWUnKS52YWx1ZVxuICAgICAgICBhZGRQcm9qSW5TaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgYWRkUHJvalRvU2lkZUJhcihwcm9qTmFtZSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtnZXRQcm9qTmFtZX0iXSwibmFtZXMiOlsiZ29CYWNrVG9JbmRleCIsImFkZFRhc2tBbmRMaXN0Qm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiY3JlYXRlVGFzayIsInRpdGxlIiwiZGVzYyIsImRhdGUiLCJwcmlvcml0eSIsInRoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZvcm1JbmZvRmlsbCIsImZvcm1JbmZvIiwidGl0bGVWYWwiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGVzY1ZhbCIsImRhdGVWYWwiLCJnZXRGb3JtVGFza0luZm8iLCJsaXN0T2ZUYXNrcyIsInRhc2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGVEZXNjRGF0ZSIsInRhc2tUaXRsZSIsImlubmVySFRNTCIsInRhc2tEZXNjIiwidGFza0RhdGUiLCJhcHBlbmQiLCJjaGVja1ByaW9yRGVsIiwiY2hlY2tib3hEaXYiLCJjaGVja2JveElucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsImxhYmVsRm9yQ2hlY2tib3giLCJodG1sRm9yIiwicHJpb3JpdHlMdmwiLCJ0YXNrRGVsQnRuIiwidGFza0VkaXRCdG4iLCJlZGl0VGFza0luZm8iLCJ0YXNrSXRlbSIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJwcmV2VGFza0luZm8iLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsInJldHJpZXZlUHJldlRhc2tJbmZvIiwiaW5wdXRUaXRsZSIsImlucHV0RGVzYyIsImlucHV0RGF0ZSIsInNsaWNlIiwiaW5wdXRQcmlvcml0eSIsImVkaXRlZFRpdGxlIiwiZWRpdGVkRGVzYyIsImVkaXRlZERhdGUiLCJlZGl0ZWRQcmlvcml0eSIsInNldEVkaXRlZFRhc2tJbmZvIiwiYWRkUHJvakluU2lkZSIsImNoaWxkRWxlbWVudENvdW50IiwicHJvak5hbWUiLCJwYXJlbnRQcm9qTGlzdCIsIm5ld1Byb2oiLCJhcHBlbmRDaGlsZCIsImFkZFByb2pUb1NpZGVCYXIiXSwic291cmNlUm9vdCI6IiJ9