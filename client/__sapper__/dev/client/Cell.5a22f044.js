import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, f as element, g as text, A as space, h as claim_element, j as children, k as claim_text, l as detach_dev, B as claim_space, q as attr_dev, r as add_location, p as set_style, u as insert_hydration_dev, w as append_hydration_dev, J as set_data_dev, n as noop, x as binding_callbacks } from './client.e95e8687.js';

class Draggable {

  constructor() {
    this.ops = new Map();
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.dragData;
    this.placeHolder;
    this.elements;
    this.currentElement;
    this.handle;
  }

  setElement(el, hooks, handle = null) {
    this.ops.set(el, {
      hooks
    });

    this.handle = handle;
  
    (this.handle || el).setAttribute('draggable', true);
    (this.handle || el).addEventListener('dragstart', this.onDragStart);
  }

  //must create clone and dragData.clone for succesfull dragging operation
  onDragStart(e) {
    e.preventDefault();
    const op = this.ops.get(e.target);
    this.currentElement = (this.handle || e.target);

    window.addEventListener("pointermove", this.onDrag);
    window.addEventListener("pointerup", this.onDrop);

    const movingItem = this.handle ? this.handle.closest('.myitem') : e.target;

    const clone = movingItem.cloneNode(true);
    clone.classList.add("clone");

    this.dragData = {
      clone
    };

    if (op && op.hooks && op.hooks.onDragStart && typeof op.hooks.onDragStart === 'function') {
      op.hooks.onDragStart(e);
    }
  }

  onDrag(ev) {//op changes all time so we have find another way to handle mouse move
    const op = this.ops.get(this.currentElement);

    if (this.dragData && this.dragData.clone && !this.dragData.clone.parentNode) {
      document.body.appendChild(this.dragData.clone);
    }

    const centerToElement = this.handle || this.dragData.clone;

    if (this.dragData && this.dragData.clone) {
      this.dragData.clone.style.left =
        ev.clientX - centerToElement.offsetWidth / 2 + "px";
      this.dragData.clone.style.top =
        ev.clientY - centerToElement.offsetHeight / 2 + "px";
    }

    this.elements = document.elementsFromPoint(ev.clientX, ev.clientY);

    let underElement = this.elements[1].getBoundingClientRect();
    this.left = ev.clientX - underElement.left; //x position within the element.
    this.top = ev.clientY - underElement.top; //y position within the element.

    if (op && op.hooks && op.hooks.onDrag && typeof op.hooks.onDrag === 'function') {
      op.hooks.onDrag(ev);
    }
  }

  onDrop(e) {
    window.removeEventListener("pointermove", this.onDrag);
    window.removeEventListener("pointerup", this.onDrop);

    const op = this.ops.get(this.currentElement);
    this.currentElement = null;

    if (this.dragData && this.dragData.clone) {
      this.dragData.clone.remove();
    }
    this.dragData = null;

    if (op && op.hooks && op.hooks.onDrop && typeof op.hooks.onDrop === 'function') {
      op.hooks.onDrop(e);
    }
  }

}

/* src\routes\Cell.svelte generated by Svelte v3.44.1 */
const file = "src\\routes\\Cell.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let t1;
	let t2_value = /*row*/ ctx[0].title + "";
	let t2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text("[=]");
			t1 = space();
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "[=]");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			t2 = claim_text(div1_nodes, t2_value);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "handle svelte-zdstf8");
			add_location(div0, file, 65, 2, 1026);
			attr_dev(div1, "class", "cell field svelte-zdstf8");
			set_style(div1, "background-color", /*row*/ ctx[0].color);
			attr_dev(div1, "id", /*id*/ ctx[1]);
			add_location(div1, file, 59, 0, 919);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div1, anchor);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, t0);
			/*div0_binding*/ ctx[4](div0);
			append_hydration_dev(div1, t1);
			append_hydration_dev(div1, t2);
			/*div1_binding*/ ctx[5](div1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*row*/ 1 && t2_value !== (t2_value = /*row*/ ctx[0].title + "")) set_data_dev(t2, t2_value);

			if (dirty & /*row*/ 1) {
				set_style(div1, "background-color", /*row*/ ctx[0].color);
			}

			if (dirty & /*id*/ 2) {
				attr_dev(div1, "id", /*id*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			/*div0_binding*/ ctx[4](null);
			/*div1_binding*/ ctx[5](null);
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
	
}

function onDrag(ev) {
	
}

function onDrop() {
	
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Cell', slots, []);
	let { row } = $$props;
	let { id } = $$props;
	const draggable = new Draggable();
	let cells = [];
	let handle;

	onMount(() => {
		cells.forEach(item => {
			draggable.setElement(item, { onDragStart, onDrag, onDrop }, handle);
		});
	});

	const writable_props = ['row', 'id'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cell> was created with unknown prop '${key}'`);
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			handle = $$value;
			$$invalidate(3, handle);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			cells[id] = $$value;
			$$invalidate(2, cells);
			$$invalidate(1, id);
		});
	}

	$$self.$$set = $$props => {
		if ('row' in $$props) $$invalidate(0, row = $$props.row);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		onMount,
		Draggable,
		row,
		id,
		draggable,
		cells,
		handle,
		onDragStart,
		onDrag,
		onDrop
	});

	$$self.$inject_state = $$props => {
		if ('row' in $$props) $$invalidate(0, row = $$props.row);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
		if ('cells' in $$props) $$invalidate(2, cells = $$props.cells);
		if ('handle' in $$props) $$invalidate(3, handle = $$props.handle);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [row, id, cells, handle, div0_binding, div1_binding];
}

class Cell extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { row: 0, id: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cell",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*row*/ ctx[0] === undefined && !('row' in props)) {
			console.warn("<Cell> was created without expected prop 'row'");
		}

		if (/*id*/ ctx[1] === undefined && !('id' in props)) {
			console.warn("<Cell> was created without expected prop 'id'");
		}
	}

	get row() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set row(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Cell$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Cell
});

export { Cell as C, Draggable as D, Cell$1 as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC41YTIyZjA0NC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9EcmFnZ2FibGUuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL0NlbGwuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEcmFnZ2FibGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3BzID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5vbkRyYWdTdGFydCA9IHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EcmFnID0gdGhpcy5vbkRyYWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ecm9wID0gdGhpcy5vbkRyb3AuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLnBsYWNlSG9sZGVyO1xyXG4gICAgdGhpcy5lbGVtZW50cztcclxuICAgIHRoaXMuY3VycmVudEVsZW1lbnQ7XHJcbiAgICB0aGlzLmhhbmRsZTtcclxuICB9XHJcblxyXG4gIHNldEVsZW1lbnQoZWwsIGhvb2tzLCBoYW5kbGUgPSBudWxsKSB7XHJcbiAgICB0aGlzLm9wcy5zZXQoZWwsIHtcclxuICAgICAgaG9va3NcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xyXG4gIFxyXG4gICAgKHRoaXMuaGFuZGxlIHx8IGVsKS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xyXG4gICAgKHRoaXMuaGFuZGxlIHx8IGVsKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuICB9XHJcblxyXG4gIC8vbXVzdCBjcmVhdGUgY2xvbmUgYW5kIGRyYWdEYXRhLmNsb25lIGZvciBzdWNjZXNmdWxsIGRyYWdnaW5nIG9wZXJhdGlvblxyXG4gIG9uRHJhZ1N0YXJ0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG9wID0gdGhpcy5vcHMuZ2V0KGUudGFyZ2V0KTtcclxuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSAodGhpcy5oYW5kbGUgfHwgZS50YXJnZXQpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vbkRyYWcpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5vbkRyb3ApO1xyXG5cclxuICAgIGNvbnN0IG1vdmluZ0l0ZW0gPSB0aGlzLmhhbmRsZSA/IHRoaXMuaGFuZGxlLmNsb3Nlc3QoJy5teWl0ZW0nKSA6IGUudGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0IGNsb25lID0gbW92aW5nSXRlbS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKFwiY2xvbmVcIik7XHJcblxyXG4gICAgdGhpcy5kcmFnRGF0YSA9IHtcclxuICAgICAgY2xvbmVcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wICYmIG9wLmhvb2tzICYmIG9wLmhvb2tzLm9uRHJhZ1N0YXJ0ICYmIHR5cGVvZiBvcC5ob29rcy5vbkRyYWdTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcC5ob29rcy5vbkRyYWdTdGFydChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHJhZyhldikgey8vb3AgY2hhbmdlcyBhbGwgdGltZSBzbyB3ZSBoYXZlIGZpbmQgYW5vdGhlciB3YXkgdG8gaGFuZGxlIG1vdXNlIG1vdmVcclxuICAgIGNvbnN0IG9wID0gdGhpcy5vcHMuZ2V0KHRoaXMuY3VycmVudEVsZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEYXRhICYmIHRoaXMuZHJhZ0RhdGEuY2xvbmUgJiYgIXRoaXMuZHJhZ0RhdGEuY2xvbmUucGFyZW50Tm9kZSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ0RhdGEuY2xvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNlbnRlclRvRWxlbWVudCA9IHRoaXMuaGFuZGxlIHx8IHRoaXMuZHJhZ0RhdGEuY2xvbmU7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0RhdGEgJiYgdGhpcy5kcmFnRGF0YS5jbG9uZSkge1xyXG4gICAgICB0aGlzLmRyYWdEYXRhLmNsb25lLnN0eWxlLmxlZnQgPVxyXG4gICAgICAgIGV2LmNsaWVudFggLSBjZW50ZXJUb0VsZW1lbnQub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgICB0aGlzLmRyYWdEYXRhLmNsb25lLnN0eWxlLnRvcCA9XHJcbiAgICAgICAgZXYuY2xpZW50WSAtIGNlbnRlclRvRWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChldi5jbGllbnRYLCBldi5jbGllbnRZKTtcclxuXHJcbiAgICBsZXQgdW5kZXJFbGVtZW50ID0gdGhpcy5lbGVtZW50c1sxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgdGhpcy5sZWZ0ID0gZXYuY2xpZW50WCAtIHVuZGVyRWxlbWVudC5sZWZ0OyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gICAgdGhpcy50b3AgPSBldi5jbGllbnRZIC0gdW5kZXJFbGVtZW50LnRvcDsgLy95IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuXHJcbiAgICBpZiAob3AgJiYgb3AuaG9va3MgJiYgb3AuaG9va3Mub25EcmFnICYmIHR5cGVvZiBvcC5ob29rcy5vbkRyYWcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgb3AuaG9va3Mub25EcmFnKGV2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHJvcChlKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMub25EcmFnKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMub25Ecm9wKTtcclxuXHJcbiAgICBjb25zdCBvcCA9IHRoaXMub3BzLmdldCh0aGlzLmN1cnJlbnRFbGVtZW50KTtcclxuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEYXRhICYmIHRoaXMuZHJhZ0RhdGEuY2xvbmUpIHtcclxuICAgICAgdGhpcy5kcmFnRGF0YS5jbG9uZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZHJhZ0RhdGEgPSBudWxsO1xyXG5cclxuICAgIGlmIChvcCAmJiBvcC5ob29rcyAmJiBvcC5ob29rcy5vbkRyb3AgJiYgdHlwZW9mIG9wLmhvb2tzLm9uRHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcC5ob29rcy5vbkRyb3AoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8c2NyaXB0PlxyXG4gIGltcG9ydCB7b25Nb3VudH0gZnJvbSAnc3ZlbHRlJztcclxuICBpbXBvcnQge0RyYWdnYWJsZX0gZnJvbSAnLi9EcmFnZ2FibGUuanMnO1xyXG5cclxuICBleHBvcnQgbGV0IHJvdztcclxuICBleHBvcnQgbGV0IGlkO1xyXG5cclxuICBjb25zdCBkcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKCk7XHJcblxyXG4gIGxldCBjZWxscyA9IFtdO1xyXG4gIGxldCBoYW5kbGU7XHJcblxyXG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EcmFnKGV2KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Ecm9wKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBkcmFnZ2FibGUuc2V0RWxlbWVudChpdGVtLCB7XHJcbiAgICAgICAgb25EcmFnU3RhcnQsXHJcbiAgICAgICAgb25EcmFnLFxyXG4gICAgICAgIG9uRHJvcFxyXG4gICAgICB9LCBoYW5kbGUpXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuY2VsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbGw6bm90KDpmaXJzdC1vZi10eXBlKSxcclxuICAgIC5jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW5kbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxkaXZcclxuICBjbGFzcz1cImNlbGwgZmllbGRcIlxyXG4gIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3Jvdy5jb2xvcn1cIlxyXG4gIHtpZH1cclxuICBiaW5kOnRoaXM9e2NlbGxzW2lkXX1cclxuPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiaGFuZGxlXCJcclxuICAgIGJpbmQ6dGhpcz17aGFuZGxlfVxyXG4gID5cclxuICAgIFs9XVxyXG4gIDwvZGl2PlxyXG4gIHtyb3cudGl0bGV9XHJcbjwvZGl2PlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBTyxNQUFNLFNBQVMsQ0FBQztBQUN2QjtBQUNBLEVBQUUsV0FBVyxHQUFHO0FBQ2hCLElB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
