
export const findDataTest= (comp, attribute)=>{
	const wrapper=comp.find(`[data-test='${attribute}']`);
	return wrapper;
}
