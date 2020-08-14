import actions from "@/store/modules/test/actions";
import mutations from "@/store/modules/test/mutations";
import getters from "@/store/modules/test/getters";
import state from "@/store/modules/test/state";

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}