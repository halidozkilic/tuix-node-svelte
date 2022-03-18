import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, f as element, h as claim_element, j as children, l as detach_dev, q as attr_dev, p as set_style, I as toggle_class, r as add_location, u as insert_hydration_dev, n as noop } from './client.d18c5560.js';

/* src\routes\Placeholder.svelte generated by Svelte v3.44.1 */

const file = "src\\routes\\Placeholder.svelte";

function create_fragment(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				style: true,
				"data-placeholder": true
			});

			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "placeholder svelte-1to8rlq");
			set_style(div, "background-color", /*placeholder*/ ctx[0].color);
			attr_dev(div, "data-placeholder", "true");
			toggle_class(div, "placeholderw", /*placeholder*/ ctx[0].position[1] || /*placeholder*/ ctx[0].position[1] === 0);
			add_location(div, file, 20, 0, 343);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*placeholder*/ 1) {
				set_style(div, "background-color", /*placeholder*/ ctx[0].color);
			}

			if (dirty & /*placeholder*/ 1) {
				toggle_class(div, "placeholderw", /*placeholder*/ ctx[0].position[1] || /*placeholder*/ ctx[0].position[1] === 0);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Placeholder', slots, []);
	let { placeholder } = $$props;
	const writable_props = ['placeholder'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Placeholder> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('placeholder' in $$props) $$invalidate(0, placeholder = $$props.placeholder);
	};

	$$self.$capture_state = () => ({ placeholder });

	$$self.$inject_state = $$props => {
		if ('placeholder' in $$props) $$invalidate(0, placeholder = $$props.placeholder);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [placeholder];
}

class Placeholder extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { placeholder: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Placeholder",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*placeholder*/ ctx[0] === undefined && !('placeholder' in props)) {
			console.warn("<Placeholder> was created without expected prop 'placeholder'");
		}
	}

	get placeholder() {
		throw new Error("<Placeholder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set placeholder(value) {
		throw new Error("<Placeholder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Placeholder as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhY2Vob2xkZXIuNTI5NzMwZTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvUGxhY2Vob2xkZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCBwbGFjZWhvbGRlcjtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5wbGFjZWhvbGRlcjpub3QoOmZpcnN0LW9mLXR5cGUpLFxyXG4gIC5wbGFjZWhvbGRlcjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPGRpdlxyXG4gIGNsYXNzPVwicGxhY2Vob2xkZXJcIlxyXG4gIGNsYXNzOnBsYWNlaG9sZGVydz17cGxhY2Vob2xkZXIucG9zaXRpb25bMV0gfHwgcGxhY2Vob2xkZXIucG9zaXRpb25bMV0gPT09IDB9XHJcbiAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7cGxhY2Vob2xkZXIuY29sb3J9XCJcclxuICBkYXRhLXBsYWNlaG9sZGVyPVwidHJ1ZVwiXHJcbi8+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQXVCNEIsR0FBVyxJQUFDLEtBQUs7O3FEQUR2QixHQUFXLElBQUMsUUFBUSxDQUFDLENBQUMscUJBQUssR0FBVyxJQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7OztHQUY5RSxvQkFLRTs7Ozt1REFGMEIsR0FBVyxJQUFDLEtBQUs7Ozs7c0RBRHZCLEdBQVcsSUFBQyxRQUFRLENBQUMsQ0FBQyxxQkFBSyxHQUFXLElBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FyQmpFLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
