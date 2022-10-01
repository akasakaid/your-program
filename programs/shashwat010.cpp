class Solution {
  public:
    int dir[5] = {-1, 0, 1, 0, -1};
    void solve(int r, int c, vector<vector<int>>& v, vector<pair<int, int>>& vp) {
        if(r < 0 || r >= v.size() || c < 0 || c >= v[0].size() || v[r][c] == 0) return;
        
        vp.push_back({r, c});
        v[r][c] = 0;
        for(int i=0; i<4; i++) solve(r+dir[i], c+dir[i+1], v, vp);
    }
    
    int countDistinctIslands(vector<vector<int>>& v) {
        // code here
        int n = v.size(), m = v[0].size(), ans = 0;
        set<vector<pair<int, int>>> st;
        
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(v[i][j] == 1) {
                    vector<pair<int, int>> vp;
                    solve(i, j, v, vp);
                    for(auto &it : vp) {
                        it.first -= i;
                        it.second -= j;
                    }
                    
                    if(st.find(vp) == st.end()) ans++;
                    st.insert(vp);
                }
            }
        }
        return ans;
    }
};