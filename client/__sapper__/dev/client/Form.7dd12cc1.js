import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, f as element, g as text, h as claim_element, j as children, k as claim_text, l as detach_dev, p as set_style, q as attr_dev, r as add_location, u as insert_hydration_dev, w as append_hydration_dev, n as noop, x as binding_callbacks, y as validate_each_argument, z as validate_each_keys, c as create_component, a as claim_component, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, A as space, B as claim_space, C as check_outros, D as update_keyed_each, E as destroy_each, F as group_outros, G as destroy_block } from './client.fa3ef92f.js';
import Row from './Row.51a77e43.js';
import { D as Draggable } from './Cell.4d582eaf.js';
import './Placeholder.6956535f.js';

/* src\routes\example.svelte generated by Svelte v3.44.1 */
const file$1 = "src\\routes\\example.svelte";

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let t;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t = text("[=]");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { style: true, class: true });
			var div0_nodes = children(div0);
			t = claim_text(div0_nodes, "[=]");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div0, "cursor", "grab");
			set_style(div0, "width", "20px");
			attr_dev(div0, "class", "handle");
			add_location(div0, file$1, 53, 2, 1330);
			attr_dev(div1, "class", "myitem");
			set_style(div1, "width", "100%");
			set_style(div1, "height", "80px");
			set_style(div1, "background-color", "#555");
			add_location(div1, file$1, 52, 0, 1229);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div1, anchor);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, t);
			/*div0_binding*/ ctx[2](div0);
			/*div1_binding*/ ctx[3](div1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			/*div0_binding*/ ctx[2](null);
			/*div1_binding*/ ctx[3](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function onDragStart(ev) {
	
} /*
// set cloned object and its bg color
const clone = ev.target.cloneNode(true);
clone.classList.add("clone");

draggable.dragData = {
  clone,

};
*/

function onDrag(ev) {
	if (draggable.dragData && draggable.dragData.clone && !draggable.dragData.clone.parentNode) {
		document.body.appendChild(draggable.dragData.clone);
	}

	if (draggable && draggable.dragData && draggable.dragData.clone) {
		draggable.dragData.clone.style.left = ev.clientX - draggable.dragData.clone.offsetWidth / 8 + "px";
		draggable.dragData.clone.style.top = ev.clientY - draggable.dragData.clone.offsetHeight / 4 + "px";
		draggable.dragData.clone.style.background = 'orange';
	}
}

function onDrop() {
	
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Example', slots, []);
	let mydiv;
	let handle;

	onMount(() => {
		draggable.setElement(mydiv, { onDragStart, onDrag, onDrop }, handle);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			handle = $$value;
			$$invalidate(1, handle);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			mydiv = $$value;
			$$invalidate(0, mydiv);
		});
	}

	$$self.$capture_state = () => ({
		onMount,
		mydiv,
		handle,
		onDragStart,
		onDrag,
		onDrop
	});

	$$self.$inject_state = $$props => {
		if ('mydiv' in $$props) $$invalidate(0, mydiv = $$props.mydiv);
		if ('handle' in $$props) $$invalidate(1, handle = $$props.handle);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [mydiv, handle, div0_binding, div1_binding];
}

class Example extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Example",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\routes\Form.svelte generated by Svelte v3.44.1 */
const file = "src\\routes\\Form.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	child_ctx[18] = list;
	child_ctx[19] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

// (217:2) {#each dropZoneItems as rows, index}
function create_each_block_1(ctx) {
	let row;
	let current;

	row = new Row({
			props: {
				placeholder: /*placeholder*/ ctx[0],
				rowIndex: /*index*/ ctx[19],
				rows: /*rows*/ ctx[20]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(row.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(row.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const row_changes = {};
			if (dirty & /*placeholder*/ 1) row_changes.placeholder = /*placeholder*/ ctx[0];
			if (dirty & /*dropZoneItems*/ 4) row_changes.rows = /*rows*/ ctx[20];
			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(217:2) {#each dropZoneItems as rows, index}",
		ctx
	});

	return block;
}

// (223:2) {#each dragItems as item, index (item.id)}
function create_each_block(key_1, ctx) {
	let div;
	let t0_value = /*item*/ ctx[17].title + "";
	let t0;
	let t1;
	let index = /*index*/ ctx[19];
	const assign_div = () => /*div_binding*/ ctx[4](div, index);
	const unassign_div = () => /*div_binding*/ ctx[4](null, index);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				"data-id": true,
				style: true
			});

			var div_nodes = children(div);
			t0 = claim_text(div_nodes, t0_value);
			t1 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "cell svelte-zdflb6");
			attr_dev(div, "data-id", /*item*/ ctx[17].id);
			set_style(div, "background-color", /*item*/ ctx[17].color);
			add_location(div, file, 223, 4, 6100);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, t1);
			assign_div();
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (index !== /*index*/ ctx[19]) {
				unassign_div();
				index = /*index*/ ctx[19];
				assign_div();
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			unassign_div();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(223:2) {#each dragItems as item, index (item.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div0;
	let t;
	let div1;
	let each_blocks = [];
	let each1_lookup = new Map();
	let current;
	let each_value_1 = /*dropZoneItems*/ ctx[2];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	let each_value = /*dragItems*/ ctx[3];
	validate_each_argument(each_value);
	const get_key = ctx => /*item*/ ctx[17].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div0 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "zone svelte-zdflb6");
			add_location(div0, file, 215, 0, 5879);
			attr_dev(div1, "class", "drag-list svelte-zdflb6");
			attr_dev(div1, "id", "dragList");
			add_location(div1, file, 221, 0, 6011);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div0, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div0, null);
			}

			insert_hydration_dev(target, t, anchor);
			insert_hydration_dev(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*placeholder, dropZoneItems*/ 5) {
				each_value_1 = /*dropZoneItems*/ ctx[2];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (dirty & /*dragItems, bindItems*/ 10) {
				each_value = /*dragItems*/ ctx[3];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each1_lookup, div1, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function calculateHIdx(elements, left) {
	if (left > elements[1].offsetWidth / 2) {
		return Number(elements[1].id) + 1;
	} else {
		return elements[2].classList.contains("field")
		? Number(elements[2].id)
		: Number(elements[1].id);
	}
}

function calculateVIdx(elements, top, onHorizontal) {
	const lineElement = elements[1].closest('.row');

	if (onHorizontal) {
		return Number(lineElement.getAttribute('id'));
	}

	if (top > lineElement.offsetHeight - this.activeArea) {
		return Number(lineElement.id) + 1;
	}

	if (top < this.activeArea) {
		return Number(lineElement.id);
	}

	return null;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Form', slots, []);
	const draggable = new Draggable();
	let activeArea = 25;
	draggable.activeArea = activeArea;
	let placeholder = null;
	let to;
	let dontMove;

	//export let relocate = false;
	let bindItems = [];

	//$: console.trace(placeholder);
	const COLORS = {
		brown: "#721919",
		blue: "#22228d",
		orange: "#976100",
		green: "#1f621f",
		red: "#873e3e",
		pink: "#873e75",
		gray: "#424242",
		yellow: "#767614"
	};

	let dragItems = [
		{
			id: 1,
			title: "Drag Item 1",
			color: COLORS.brown
		},
		{
			id: 2,
			title: "Drag Item 2",
			color: COLORS.green
		},
		{
			id: 3,
			title: "Drag Item 3",
			color: COLORS.pink
		},
		{
			id: 4,
			title: "Drag Item 4",
			color: COLORS.gray
		},
		{
			id: 10,
			title: "Drag Item 4",
			color: COLORS.blue
		}
	];

	let dropZoneItems = []; // [{ id: 13, title: "Item (blue)", color: COLORS.blue }],
	// [
	//   { id: 5, title: "Item (yellow)", color: COLORS.yellow },

	//   { id: 6, title: "Item (orange)", color: COLORS.orange },
	//   { id: 7, title: "Item (blue)", color: "#22228d" },
	// ],
	// [{ id: 8, title: "Item (green)", color: COLORS.green }],
	// [
	//   { id: 9, title: "Item (yellow)", color: COLORS.yellow },
	//   { id: 10, title: "Item (blue)", color: COLORS.blue },
	//   { id: 11, title: "Item (orange)", color: COLORS.orange },
	//   { id: 12, title: "Item (red)", color: COLORS.red },
	//   { id: 13, title: "Item (red)", color: COLORS.red },
	//   { id: 14, title: "Item (red)", color: COLORS.red },
	//   { id: 16, title: "Item (red)", color: COLORS.red },
	// ],
	function generatePlaceHolder(vIdx, hIdx) {
		$$invalidate(0, placeholder = {
			item: draggable.dragData.item,
			placeholder: true,
			color: "rgb(124 124 124 / 72%)",
			position: [vIdx, hIdx]
		});
	}

	function addNewCell() {
		if (placeholder.position[1] === null) {
			dropZoneItems.splice(placeholder.position[0], 0, [placeholder]);
		} else {
			dropZoneItems[placeholder.position[0]].splice(placeholder.position[1], 0, placeholder);
		}

		$$invalidate(2, dropZoneItems);
	}

	function removeCell(VIdx, HIdx) {
		if (!placeholder) return;

		if (placeholder && placeholder.position[1] === null) {
			dropZoneItems.splice(placeholder.position[0], 1);
		} else {
			dropZoneItems[placeholder.position[0]].splice(placeholder.position[1], 1);
		}

		$$invalidate(2, dropZoneItems);
		$$invalidate(0, placeholder = null);
	}

	function removePlaceHolderKey() {
		//All dropZoneItems must have same data structre
		if (placeholder && placeholder.position) $$invalidate(2, dropZoneItems[placeholder.position[0]][placeholder.position[1] || 0] = placeholder.item, dropZoneItems);
	}

	function onDragStart(ev) {
		draggable.dragData.item = dragItems.find(o => o.id === Number(ev.target.getAttribute("data-id")));
	}

	function onDrag(ev) {
		const onField = draggable.elements[1] && (draggable.elements[1].classList.contains("field") || draggable.elements[1].classList.contains("placeholder"));
		const onZone = draggable.elements[1] && draggable.elements[1].classList.contains("zone");

		if (onField && !dontMove) {
			const onHorizontal = draggable.left < activeArea || draggable.left > draggable.elements[1].offsetWidth - activeArea;
			let hIdx;
			let vIdx;
			if (draggable.elements[1].getAttribute("data-placeholder")) return;
			vIdx = calculateVIdx(draggable.elements, draggable.top, onHorizontal);

			if (vIdx === null) {
				if (placeholder !== null) {
					removeCell();
				}

				return;
			}

			if (onHorizontal) {
				hIdx = calculateHIdx(draggable.elements, draggable.left);
			} else {
				hIdx = null;
			}

			if (!placeholder) {
				generatePlaceHolder(vIdx, hIdx);
				addNewCell();
				dontMove = true;
				clearTimeout(to);

				to = setTimeout(
					() => {
						dontMove = false;
					},
					800
				);
			}

			const deletePlaceHolder = (vIdx !== placeholder.position[0] || hIdx !== placeholder.position[1]) && !draggable.elements[1].getAttribute("data-placeholder");

			if (placeholder && deletePlaceHolder) {
				removeCell();
			}
		}

		//once mouse lefts from field then delete placerholder
		if (!onField && placeholder) {
			removeCell();
		}

		//dropping first element
		if (!onField && onZone) {
			generatePlaceHolder(0, null);
			addNewCell();
		}
	}

	function onDrop(ev) {
		removePlaceHolderKey();
		$$invalidate(0, placeholder = null);
	}

	onMount(() => {
		bindItems.forEach(item => {
			draggable.setElement(item, { onDragStart, onDrag, onDrop });
		});
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Form> was created with unknown prop '${key}'`);
	});

	function div_binding($$value, index) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			bindItems[index] = $$value;
			$$invalidate(1, bindItems);
			$$invalidate(3, dragItems);
		});
	}

	$$self.$capture_state = () => ({
		onMount,
		Row,
		Draggable,
		Example,
		draggable,
		activeArea,
		placeholder,
		to,
		dontMove,
		bindItems,
		COLORS,
		dragItems,
		dropZoneItems,
		generatePlaceHolder,
		addNewCell,
		removeCell,
		removePlaceHolderKey,
		onDragStart,
		onDrag,
		onDrop,
		calculateHIdx,
		calculateVIdx
	});

	$$self.$inject_state = $$props => {
		if ('activeArea' in $$props) activeArea = $$props.activeArea;
		if ('placeholder' in $$props) $$invalidate(0, placeholder = $$props.placeholder);
		if ('to' in $$props) to = $$props.to;
		if ('dontMove' in $$props) dontMove = $$props.dontMove;
		if ('bindItems' in $$props) $$invalidate(1, bindItems = $$props.bindItems);
		if ('dragItems' in $$props) $$invalidate(3, dragItems = $$props.dragItems);
		if ('dropZoneItems' in $$props) $$invalidate(2, dropZoneItems = $$props.dropZoneItems);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [placeholder, bindItems, dropZoneItems, dragItems, div_binding];
}

class Form extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Form",
			options,
			id: create_fragment.name
		});
	}
}

export { Form as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS43ZGQxMmNjMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9leGFtcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvRm9ybS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLTxzY3JpcHQ+LS0+XHJcbjwhLS0gIGltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vRHJhZ2dhYmxlLmpzJzstLT5cclxuPCEtLSAgY29uc3QgZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSgpOy0tPlxyXG48IS0tPC9zY3JpcHQ+LS0+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xyXG5cclxuICBsZXQgbXlkaXY7XHJcbiAgbGV0IGhhbmRsZTtcclxuIC8vIGNvbnN0IGRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoKTtcclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXYpIHtcclxuICAgIC8qXHJcbiAgICAvLyBzZXQgY2xvbmVkIG9iamVjdCBhbmQgaXRzIGJnIGNvbG9yXHJcbiAgICBjb25zdCBjbG9uZSA9IGV2LnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwiY2xvbmVcIik7XHJcblxyXG4gICAgZHJhZ2dhYmxlLmRyYWdEYXRhID0ge1xyXG4gICAgICBjbG9uZSxcclxuXHJcbiAgICB9O1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uRHJhZyhldikge1xyXG4gICAgaWYgKGRyYWdnYWJsZS5kcmFnRGF0YSAmJiBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUgJiYgIWRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lKTtcclxuICAgIH1cclxuICAgIGlmIChkcmFnZ2FibGUgJiYgZHJhZ2dhYmxlLmRyYWdEYXRhICYmIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZSkge1xyXG4gICAgICBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUuc3R5bGUubGVmdCA9XHJcbiAgICAgICAgZXYuY2xpZW50WCAtIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5vZmZzZXRXaWR0aCAvIDggKyBcInB4XCI7XHJcbiAgICAgIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5zdHlsZS50b3AgPVxyXG4gICAgICAgIGV2LmNsaWVudFkgLSBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUub2Zmc2V0SGVpZ2h0IC8gNCArIFwicHhcIjtcclxuICAgICAgZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lLnN0eWxlLmJhY2tncm91bmQgPSAnb3JhbmdlJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Ecm9wKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgZHJhZ2dhYmxlLnNldEVsZW1lbnQobXlkaXYsIHtcclxuICAgICAgb25EcmFnU3RhcnQsXHJcbiAgICAgIG9uRHJhZyxcclxuICAgICAgb25Ecm9wXHJcbiAgICB9LCBoYW5kbGUpXHJcblxyXG4gIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJteWl0ZW1cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICM1NTU7XCIgYmluZDp0aGlzPXtteWRpdn0+XHJcbiAgPGRpdlxyXG4gICAgc3R5bGU9XCIgY3Vyc29yOiBncmFiO3dpZHRoOiAyMHB4XCJcclxuICAgIGNsYXNzPVwiaGFuZGxlXCJcclxuICAgIGJpbmQ6dGhpcz17aGFuZGxlfVxyXG4gID5cclxuICAgIFs9XVxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCI8c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XHJcbiAgaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3cuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4vRHJhZ2dhYmxlLmpzXCI7XHJcbiAgaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS5zdmVsdGVcIjtcclxuXHJcbiAgY29uc3QgZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSgpO1xyXG5cclxuICBsZXQgYWN0aXZlQXJlYSA9IDI1O1xyXG4gIGRyYWdnYWJsZS5hY3RpdmVBcmVhID0gYWN0aXZlQXJlYTtcclxuICBsZXQgcGxhY2Vob2xkZXIgPSBudWxsO1xyXG4gIGxldCB0bztcclxuICBsZXQgZG9udE1vdmU7XHJcbiAgLy9leHBvcnQgbGV0IHJlbG9jYXRlID0gZmFsc2U7XHJcbiAgbGV0IGJpbmRJdGVtcyA9IFtdO1xyXG5cclxuICAvLyQ6IGNvbnNvbGUudHJhY2UocGxhY2Vob2xkZXIpO1xyXG5cclxuICBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBicm93bjogXCIjNzIxOTE5XCIsXHJcbiAgICBibHVlOiBcIiMyMjIyOGRcIixcclxuICAgIG9yYW5nZTogXCIjOTc2MTAwXCIsXHJcbiAgICBncmVlbjogXCIjMWY2MjFmXCIsXHJcbiAgICByZWQ6IFwiIzg3M2UzZVwiLFxyXG4gICAgcGluazogXCIjODczZTc1XCIsXHJcbiAgICBncmF5OiBcIiM0MjQyNDJcIixcclxuICAgIHllbGxvdzogXCIjNzY3NjE0XCIsXHJcbiAgfTtcclxuXHJcbiAgbGV0IGRyYWdJdGVtcyA9IFtcclxuICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkRyYWcgSXRlbSAxXCIsIGNvbG9yOiBDT0xPUlMuYnJvd24gfSxcclxuICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkRyYWcgSXRlbSAyXCIsIGNvbG9yOiBDT0xPUlMuZ3JlZW4gfSxcclxuICAgIHsgaWQ6IDMsIHRpdGxlOiBcIkRyYWcgSXRlbSAzXCIsIGNvbG9yOiBDT0xPUlMucGluayB9LFxyXG4gICAgeyBpZDogNCwgdGl0bGU6IFwiRHJhZyBJdGVtIDRcIiwgY29sb3I6IENPTE9SUy5ncmF5IH0sXHJcbiAgICB7IGlkOiAxMCwgdGl0bGU6IFwiRHJhZyBJdGVtIDRcIiwgY29sb3I6IENPTE9SUy5ibHVlIH0sXHJcbiAgXTtcclxuXHJcbiAgbGV0IGRyb3Bab25lSXRlbXMgPSBbXHJcbiAgICAvLyBbeyBpZDogMTMsIHRpdGxlOiBcIkl0ZW0gKGJsdWUpXCIsIGNvbG9yOiBDT0xPUlMuYmx1ZSB9XSxcclxuICAgIC8vIFtcclxuICAgIC8vICAgeyBpZDogNSwgdGl0bGU6IFwiSXRlbSAoeWVsbG93KVwiLCBjb2xvcjogQ09MT1JTLnllbGxvdyB9LFxyXG4gICAgLy8gICB7IGlkOiA2LCB0aXRsZTogXCJJdGVtIChvcmFuZ2UpXCIsIGNvbG9yOiBDT0xPUlMub3JhbmdlIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDcsIHRpdGxlOiBcIkl0ZW0gKGJsdWUpXCIsIGNvbG9yOiBcIiMyMjIyOGRcIiB9LFxyXG4gICAgLy8gXSxcclxuICAgIC8vIFt7IGlkOiA4LCB0aXRsZTogXCJJdGVtIChncmVlbilcIiwgY29sb3I6IENPTE9SUy5ncmVlbiB9XSxcclxuICAgIC8vIFtcclxuICAgIC8vICAgeyBpZDogOSwgdGl0bGU6IFwiSXRlbSAoeWVsbG93KVwiLCBjb2xvcjogQ09MT1JTLnllbGxvdyB9LFxyXG4gICAgLy8gICB7IGlkOiAxMCwgdGl0bGU6IFwiSXRlbSAoYmx1ZSlcIiwgY29sb3I6IENPTE9SUy5ibHVlIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDExLCB0aXRsZTogXCJJdGVtIChvcmFuZ2UpXCIsIGNvbG9yOiBDT0xPUlMub3JhbmdlIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDEyLCB0aXRsZTogXCJJdGVtIChyZWQpXCIsIGNvbG9yOiBDT0xPUlMucmVkIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDEzLCB0aXRsZTogXCJJdGVtIChyZWQpXCIsIGNvbG9yOiBDT0xPUlMucmVkIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDE0LCB0aXRsZTogXCJJdGVtIChyZWQpXCIsIGNvbG9yOiBDT0xPUlMucmVkIH0sXHJcbiAgICAvLyAgIHsgaWQ6IDE2LCB0aXRsZTogXCJJdGVtIChyZWQpXCIsIGNvbG9yOiBDT0xPUlMucmVkIH0sXHJcbiAgICAvLyBdLFxyXG4gIF07XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGxhY2VIb2xkZXIodklkeCwgaElkeCkge1xyXG4gICAgcGxhY2Vob2xkZXIgPSB7XHJcbiAgICAgIGl0ZW06IGRyYWdnYWJsZS5kcmFnRGF0YS5pdGVtLFxyXG4gICAgICBwbGFjZWhvbGRlcjogdHJ1ZSxcclxuICAgICAgY29sb3I6IFwicmdiKDEyNCAxMjQgMTI0IC8gNzIlKVwiLFxyXG4gICAgICBwb3NpdGlvbjogW3ZJZHgsIGhJZHhdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE5ld0NlbGwoKSB7XHJcbiAgICBpZiAocGxhY2Vob2xkZXIucG9zaXRpb25bMV0gPT09IG51bGwpIHtcclxuICAgICAgZHJvcFpvbmVJdGVtcy5zcGxpY2UocGxhY2Vob2xkZXIucG9zaXRpb25bMF0sIDAsIFtwbGFjZWhvbGRlcl0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHJvcFpvbmVJdGVtc1twbGFjZWhvbGRlci5wb3NpdGlvblswXV0uc3BsaWNlKFxyXG4gICAgICAgIHBsYWNlaG9sZGVyLnBvc2l0aW9uWzFdLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGRyb3Bab25lSXRlbXMgPSBkcm9wWm9uZUl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ2VsbChWSWR4LCBISWR4KSB7XHJcbiAgICBpZiAoIXBsYWNlaG9sZGVyKSByZXR1cm47XHJcbiAgICBpZiAocGxhY2Vob2xkZXIgJiYgcGxhY2Vob2xkZXIucG9zaXRpb25bMV0gPT09IG51bGwpIHtcclxuICAgICAgZHJvcFpvbmVJdGVtcy5zcGxpY2UocGxhY2Vob2xkZXIucG9zaXRpb25bMF0sIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHJvcFpvbmVJdGVtc1twbGFjZWhvbGRlci5wb3NpdGlvblswXV0uc3BsaWNlKHBsYWNlaG9sZGVyLnBvc2l0aW9uWzFdLCAxKTtcclxuICAgIH1cclxuICAgIGRyb3Bab25lSXRlbXMgPSBkcm9wWm9uZUl0ZW1zO1xyXG4gICAgcGxhY2Vob2xkZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUGxhY2VIb2xkZXJLZXkoKSB7XHJcbiAgICAvL0FsbCBkcm9wWm9uZUl0ZW1zIG11c3QgaGF2ZSBzYW1lIGRhdGEgc3RydWN0cmVcclxuICAgIGlmIChwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlci5wb3NpdGlvbilcclxuICAgICAgZHJvcFpvbmVJdGVtc1twbGFjZWhvbGRlci5wb3NpdGlvblswXV1bcGxhY2Vob2xkZXIucG9zaXRpb25bMV0gfHwgMF0gPVxyXG4gICAgICAgIHBsYWNlaG9sZGVyLml0ZW07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChldikge1xyXG4gICAgZHJhZ2dhYmxlLmRyYWdEYXRhLml0ZW0gPSBkcmFnSXRlbXMuZmluZChcclxuICAgICAgKG8pID0+IG8uaWQgPT09IE51bWJlcihldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyYWcoZXYpIHtcclxuICAgIGNvbnN0IG9uRmllbGQgPVxyXG4gICAgICBkcmFnZ2FibGUuZWxlbWVudHNbMV0gJiZcclxuICAgICAgKGRyYWdnYWJsZS5lbGVtZW50c1sxXS5jbGFzc0xpc3QuY29udGFpbnMoXCJmaWVsZFwiKSB8fFxyXG4gICAgICAgIGRyYWdnYWJsZS5lbGVtZW50c1sxXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGFjZWhvbGRlclwiKSk7XHJcblxyXG4gICAgY29uc3Qgb25ab25lID1cclxuICAgICAgZHJhZ2dhYmxlLmVsZW1lbnRzWzFdICYmIGRyYWdnYWJsZS5lbGVtZW50c1sxXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ6b25lXCIpO1xyXG5cclxuICAgIGlmIChvbkZpZWxkICYmICFkb250TW92ZSkge1xyXG4gICAgICBjb25zdCBvbkhvcml6b250YWwgPVxyXG4gICAgICAgIGRyYWdnYWJsZS5sZWZ0IDwgYWN0aXZlQXJlYSB8fFxyXG4gICAgICAgIGRyYWdnYWJsZS5sZWZ0ID4gZHJhZ2dhYmxlLmVsZW1lbnRzWzFdLm9mZnNldFdpZHRoIC0gYWN0aXZlQXJlYTtcclxuXHJcbiAgICAgIGxldCBoSWR4O1xyXG4gICAgICBsZXQgdklkeDtcclxuXHJcbiAgICAgIGlmIChkcmFnZ2FibGUuZWxlbWVudHNbMV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdklkeCA9IGNhbGN1bGF0ZVZJZHgoXHJcbiAgICAgICAgZHJhZ2dhYmxlLmVsZW1lbnRzLFxyXG4gICAgICAgIGRyYWdnYWJsZS50b3AsXHJcbiAgICAgICAgb25Ib3Jpem9udGFsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh2SWR4ID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZW1vdmVDZWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9uSG9yaXpvbnRhbCkge1xyXG4gICAgICAgIGhJZHggPSBjYWxjdWxhdGVISWR4KGRyYWdnYWJsZS5lbGVtZW50cywgZHJhZ2dhYmxlLmxlZnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhJZHggPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVQbGFjZUhvbGRlcih2SWR4LCBoSWR4KTtcclxuICAgICAgICBhZGROZXdDZWxsKCk7XHJcblxyXG4gICAgICAgIGRvbnRNb3ZlID0gdHJ1ZTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodG8pO1xyXG4gICAgICAgIHRvID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkb250TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVsZXRlUGxhY2VIb2xkZXIgPVxyXG4gICAgICAgICh2SWR4ICE9PSBwbGFjZWhvbGRlci5wb3NpdGlvblswXSB8fFxyXG4gICAgICAgICAgaElkeCAhPT0gcGxhY2Vob2xkZXIucG9zaXRpb25bMV0pICYmXHJcbiAgICAgICAgIWRyYWdnYWJsZS5lbGVtZW50c1sxXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyXCIpO1xyXG5cclxuICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIGRlbGV0ZVBsYWNlSG9sZGVyKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2VsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9vbmNlIG1vdXNlIGxlZnRzIGZyb20gZmllbGQgdGhlbiBkZWxldGUgcGxhY2VyaG9sZGVyXHJcbiAgICBpZiAoIW9uRmllbGQgJiYgcGxhY2Vob2xkZXIpIHtcclxuICAgICAgcmVtb3ZlQ2VsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZHJvcHBpbmcgZmlyc3QgZWxlbWVudFxyXG4gICAgaWYgKCFvbkZpZWxkICYmIG9uWm9uZSkge1xyXG4gICAgICBnZW5lcmF0ZVBsYWNlSG9sZGVyKDAsIG51bGwpO1xyXG4gICAgICBhZGROZXdDZWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyb3AoZXYpIHtcclxuICAgIHJlbW92ZVBsYWNlSG9sZGVyS2V5KCk7XHJcbiAgICBwbGFjZWhvbGRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVISWR4KGVsZW1lbnRzLCBsZWZ0KSB7XHJcbiAgICBpZiAobGVmdCA+IGVsZW1lbnRzWzFdLm9mZnNldFdpZHRoIC8gMikge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKGVsZW1lbnRzWzFdLmlkKSArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZWxlbWVudHNbMl0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmllbGRcIilcclxuICAgICAgICA/IE51bWJlcihlbGVtZW50c1syXS5pZClcclxuICAgICAgICA6IE51bWJlcihlbGVtZW50c1sxXS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVWSWR4KGVsZW1lbnRzLCB0b3AsIG9uSG9yaXpvbnRhbCkge1xyXG4gICAgY29uc3QgbGluZUVsZW1lbnQgPSBlbGVtZW50c1sxXS5jbG9zZXN0KCcucm93Jyk7XHJcblxyXG4gICAgaWYgKG9uSG9yaXpvbnRhbCkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKGxpbmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvcCA+IGxpbmVFbGVtZW50Lm9mZnNldEhlaWdodCAtIHRoaXMuYWN0aXZlQXJlYSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKGxpbmVFbGVtZW50LmlkKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvcCA8IHRoaXMuYWN0aXZlQXJlYSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKGxpbmVFbGVtZW50LmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBvbk1vdW50KCgpID0+IHtcclxuICAgIGJpbmRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGRyYWdnYWJsZS5zZXRFbGVtZW50KGl0ZW0sIHtcclxuICAgICAgICBvbkRyYWdTdGFydCxcclxuICAgICAgICBvbkRyYWcsXHJcbiAgICAgICAgb25Ecm9wLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjwhLS1kcm9wIHpvbmUtLT5cclxuPGRpdiBjbGFzcz1cInpvbmVcIj5cclxuICB7I2VhY2ggZHJvcFpvbmVJdGVtcyBhcyByb3dzLCBpbmRleH1cclxuICAgIDxSb3cge3BsYWNlaG9sZGVyfSByb3dJbmRleD17aW5kZXh9IHtyb3dzfSAvPlxyXG4gIHsvZWFjaH1cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZHJhZy1saXN0XCIgaWQ9XCJkcmFnTGlzdFwiPlxyXG4gIHsjZWFjaCBkcmFnSXRlbXMgYXMgaXRlbSwgaW5kZXggKGl0ZW0uaWQpfVxyXG4gICAgPGRpdlxyXG4gICAgICBiaW5kOnRoaXM9e2JpbmRJdGVtc1tpbmRleF19XHJcbiAgICAgIGNsYXNzPVwiY2VsbFwiXHJcbiAgICAgIGRhdGEtaWQ9e2l0ZW0uaWR9XHJcbiAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge2l0ZW0uY29sb3J9O1wiXHJcbiAgICA+XHJcbiAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgey9lYWNofVxyXG48L2Rpdj5cclxuXHJcbjwhLS08RXhhbXBsZSAvPi0tPlxyXG5cclxuPHN0eWxlPlxyXG4gIDpnbG9iYWwoaHRtbCksXHJcbiAgOmdsb2JhbChib2R5KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHcge1xyXG4gICAgMCUge1xyXG4gICAgICBmbGV4OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGgge1xyXG4gICAgMCUge1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOmdsb2JhbCgucGxhY2Vob2xkZXJ3KSB7XHJcbiAgICBhbmltYXRpb246IHcgMC4ycztcclxuICB9XHJcblxyXG4gIDpnbG9iYWwoLnBsYWNlaG9sZGVyaCkge1xyXG4gICAgYW5pbWF0aW9uOiBoIDAuMnM7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAuem9uZSB7XHJcbiAgICBib3JkZXI6ICM5OTkgMXB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gIC5kcmFnLWxpc3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICA6Z2xvYmFsKC5jbG9uZSkge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5REcsS0FFRDs7Ozs7Ozs7OEJBRkMsS0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FQRixvQkFRTTtHQVBKLG9CQU1NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQS9DRyxXQUFXLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7OztTQWFkLE1BQU0sQ0FBQyxFQUFFO0tBQ1osU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVO0VBQ3hGLFFBQVEsQ0FBQyxJQUFJLENBQUMs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