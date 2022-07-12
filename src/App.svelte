<script>
    import {Router, Route} from "svelte-routing";
    import Index from "./routers/Index.svelte";
    import Perseverance from "./routers/Perseverance.svelte";
    import Curiosity from "./routers/Curiosity.svelte";
    import Opportunity from "./routers/Opportunity.svelte";
    import Spirit from "./routers/Spirit.svelte";
    import Zhurong from "./routers/Zhurong.svelte";

    export let url = "";
</script>


<Router url="{url}">

  <Route path="/"><Index/></Route>
  <Route path="perseverance"><Perseverance /></Route>
  <Route path="curiosity"><Curiosity /></Route>
  <Route path="opportunity"><Opportunity /></Route>
  <Route path="spirit"><Spirit /></Route>
  <Route path="zhurong"><Zhurong /></Route>

</Router>
