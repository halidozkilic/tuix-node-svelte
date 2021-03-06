import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, f as element, g as text, h as claim_element, j as children, k as claim_text, l as detach_dev, p as set_style, q as attr_dev, r as add_location, u as insert_hydration_dev, w as append_hydration_dev, n as noop, x as binding_callbacks } from './client.620f2bf0.js';
import { D as Draggable } from './Draggable.326cf938.js';

/* src\routes\Example.svelte generated by Svelte v3.44.1 */
const file = "src\\routes\\Example.svelte";

function create_fragment(ctx) {
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
			add_location(div0, file, 49, 2, 1270);
			attr_dev(div1, "class", "myitem");
			set_style(div1, "width", "100%");
			set_style(div1, "height", "80px");
			set_style(div1, "background-color", "#555");
			add_location(div1, file, 48, 0, 1169);
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
		id: create_fragment.name,
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

function onDrop() {
	
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Example', slots, []);
	const draggable = new Draggable();
	draggable.closest = 'myitem';
	let mydiv;
	let handle;

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
		Draggable,
		draggable,
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Example",
			options,
			id: create_fragment.name
		});
	}
}

export { Example as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZS5iNTk5ZTY3OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9FeGFtcGxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xyXG4gIGltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vRHJhZ2dhYmxlLmpzJztcclxuICBjb25zdCBkcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKCk7XHJcbiAgZHJhZ2dhYmxlLmNsb3Nlc3QgPSAnbXlpdGVtJztcclxuICBsZXQgbXlkaXY7XHJcbiAgbGV0IGhhbmRsZTtcclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXYpIHtcclxuICAgIC8qXHJcbiAgICAvLyBzZXQgY2xvbmVkIG9iamVjdCBhbmQgaXRzIGJnIGNvbG9yXHJcbiAgICBjb25zdCBjbG9uZSA9IGV2LnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwiY2xvbmVcIik7XHJcblxyXG4gICAgZHJhZ2dhYmxlLmRyYWdEYXRhID0ge1xyXG4gICAgICBjbG9uZSxcclxuXHJcbiAgICB9O1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uRHJhZyhldikge1xyXG4gICAgaWYgKGRyYWdnYWJsZS5kcmFnRGF0YSAmJiBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUgJiYgIWRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lKTtcclxuICAgIH1cclxuICAgIGlmIChkcmFnZ2FibGUgJiYgZHJhZ2dhYmxlLmRyYWdEYXRhICYmIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZSkge1xyXG4gICAgICBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUuc3R5bGUubGVmdCA9XHJcbiAgICAgICAgZXYuY2xpZW50WCAtIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5vZmZzZXRXaWR0aCAvIDggKyBcInB4XCI7XHJcbiAgICAgIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5zdHlsZS50b3AgPVxyXG4gICAgICAgIGV2LmNsaWVudFkgLSBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUub2Zmc2V0SGVpZ2h0IC8gNCArIFwicHhcIjtcclxuICAgICAgZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lLnN0eWxlLmJhY2tncm91bmQgPSAnb3JhbmdlJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Ecm9wKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgZHJhZ2dhYmxlLnNldEVsZW1lbnQobXlkaXYsIHtcclxuICAgICAgb25EcmFnU3RhcnQsXHJcbiAgICAgIG9uRHJhZyxcclxuICAgICAgb25Ecm9wXHJcbiAgICB9LCBoYW5kbGUpXHJcblxyXG4gIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJteWl0ZW1cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICM1NTU7XCIgYmluZDp0aGlzPXtteWRpdn0+XHJcbiAgPGRpdlxyXG4gICAgc3R5bGU9XCIgY3Vyc29yOiBncmFiO3dpZHRoOiAyMHB4XCJcclxuICAgIGNsYXNzPVwiaGFuZGxlXCJcclxuICAgIGJpbmQ6dGhpcz17aGFuZGxlfVxyXG4gID5cclxuICAgIFs9XVxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1lBcURHLEtBRUQ7Ozs7Ozs7OzhCQUZDLEtBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBUEYsb0JBUU07R0FQSixvQkFNTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EvQ0csV0FBVyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7U0EwQmQsTUFBTTs7Ozs7OztPQS9CVCxTQUFTLE9BQU8sU0FBUztDQUMvQixTQUFTLENBQUMsT0FBTyxHQUFHLFFBQVE7S0FDeEIsS0FBSztLQUNMLE1BQU07O1VBZUQsTUFBTSxDQUFDLEVBQUU7TUFDWixTQUFTLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVU7R0FDeEYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLOzs7TUFFaEQsU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLO0dBQzdELFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQ2pDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJO0dBQzlELFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQ2hDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO0dBQy9ELFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUTs7OztDQVF4RCxPQUFPO0VBQ0wsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQ3hCLFdBQVcsRUFDWCxNQUFNLEVBQ04sTUFBTSxJQUNMLE1BQU07Ozs7Ozs7Ozs7O0dBU0UsTUFBTTs7Ozs7OztHQUpxRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
