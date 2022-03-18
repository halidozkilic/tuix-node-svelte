import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, f as element, g as text, h as claim_element, j as children, k as claim_text, l as detach_dev, p as set_style, q as attr_dev, r as add_location, u as insert_hydration_dev, w as append_hydration_dev, n as noop, x as binding_callbacks } from './client.981c9ad3.js';
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
			add_location(div0, file, 50, 2, 1273);
			attr_dev(div1, "class", "myitem");
			set_style(div1, "width", "100%");
			set_style(div1, "height", "80px");
			set_style(div1, "background-color", "#555");
			add_location(div1, file, 49, 0, 1172);
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
	draggable.closest = '.myitem';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZS4wNDFkZDZiZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9FeGFtcGxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xyXG4gIGltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vRHJhZ2dhYmxlLmpzJztcclxuXHJcbiAgY29uc3QgZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSgpO1xyXG4gIGRyYWdnYWJsZS5jbG9zZXN0ID0gJy5teWl0ZW0nO1xyXG4gIGxldCBteWRpdjtcclxuICBsZXQgaGFuZGxlO1xyXG5cclxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChldikge1xyXG4gICAgLypcclxuICAgIC8vIHNldCBjbG9uZWQgb2JqZWN0IGFuZCBpdHMgYmcgY29sb3JcclxuICAgIGNvbnN0IGNsb25lID0gZXYudGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNsb25lLmNsYXNzTGlzdC5hZGQoXCJjbG9uZVwiKTtcclxuXHJcbiAgICBkcmFnZ2FibGUuZHJhZ0RhdGEgPSB7XHJcbiAgICAgIGNsb25lLFxyXG5cclxuICAgIH07XHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnKGV2KSB7XHJcbiAgICBpZiAoZHJhZ2dhYmxlLmRyYWdEYXRhICYmIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZSAmJiAhZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lLnBhcmVudE5vZGUpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRyYWdnYWJsZSAmJiBkcmFnZ2FibGUuZHJhZ0RhdGEgJiYgZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lKSB7XHJcbiAgICAgIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5zdHlsZS5sZWZ0ID1cclxuICAgICAgICBldi5jbGllbnRYIC0gZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lLm9mZnNldFdpZHRoIC8gOCArIFwicHhcIjtcclxuICAgICAgZHJhZ2dhYmxlLmRyYWdEYXRhLmNsb25lLnN0eWxlLnRvcCA9XHJcbiAgICAgICAgZXYuY2xpZW50WSAtIGRyYWdnYWJsZS5kcmFnRGF0YS5jbG9uZS5vZmZzZXRIZWlnaHQgLyA0ICsgXCJweFwiO1xyXG4gICAgICBkcmFnZ2FibGUuZHJhZ0RhdGEuY2xvbmUuc3R5bGUuYmFja2dyb3VuZCA9ICdvcmFuZ2UnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkRyb3AoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VudCgoKSA9PiB7XHJcbiAgICBkcmFnZ2FibGUuc2V0RWxlbWVudChteWRpdiwge1xyXG4gICAgICBvbkRyYWdTdGFydCxcclxuICAgICAgb25EcmFnLFxyXG4gICAgICBvbkRyb3BcclxuICAgIH0sIGhhbmRsZSlcclxuXHJcbiAgfSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cIm15aXRlbVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogODBweDsgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcIiBiaW5kOnRoaXM9e215ZGl2fT5cclxuICA8ZGl2XHJcbiAgICBzdHlsZT1cIiBjdXJzb3I6IGdyYWI7d2lkdGg6IDIwcHhcIlxyXG4gICAgY2xhc3M9XCJoYW5kbGVcIlxyXG4gICAgYmluZDp0aGlzPXtoYW5kbGV9XHJcbiAgPlxyXG4gICAgWz1dXHJcbiAgPC9kaXY+XHJcbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7WUFzREcsS0FFRDs7Ozs7Ozs7OEJBRkMsS0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FQRixvQkFRTTtHQVBKLG9CQU1NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQS9DRyxXQUFXLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7OztTQTBCZCxNQUFNOzs7Ozs7O09BL0JULFNBQVMsT0FBTyxTQUFTO0NBQy9CLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUztLQUN6QixLQUFLO0tBQ0wsTUFBTTs7VUFlRCxNQUFNLENBQUMsRUFBRTtNQUNaLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVTtHQUN4RixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUs7OztNQUVoRCxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUs7R0FDN0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FDakMsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUk7R0FDOUQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FDaEMsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUk7R0FDL0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFROzs7O0NBUXhELE9BQU87RUFDTCxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssSUFDeEIsV0FBVyxFQUNYLE1BQU0sRUFDTixNQUFNLElBQ0wsTUFBTTs7Ozs7Ozs7Ozs7R0FTRSxNQUFNOzs7Ozs7O0dBSnFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
