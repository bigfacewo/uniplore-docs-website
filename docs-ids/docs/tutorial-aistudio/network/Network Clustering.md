### 组件介绍
**“网络聚类”（Network Clustering）**控件用于对图进行聚类。

<hr/>

- 输入：
  - nwdt：网络图实例
- 输出：
  - nwdt：网络图实例

<hr/>


### 页面介绍
点击**“网络聚类”（Network Clustering）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/network/network-clustering/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>最大迭代次数</td> 
      <td>
      允许算法运行的最大迭代次数（可以在达到最大值之前收敛）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>聚类方法</td> 
      <td>
      标签传播聚类（Raghavan et al., 2007） <br/>
      标签传播聚类（Leung et al., 2009）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>计算</td> 
      <td>
      点击该按钮对图进行聚类计算
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**网络生成器（Network Generator）**控件生成网络图，之后连接**“网络聚类”（Network Clustering）**控件对图进行聚类计算，最后连接**“查看数据（Data Table）”**查看聚类结果。
![workflow](/img/aistudio/network/network-clustering/workflow.png)

案例中全部组件使用默认配置，案例中控件的配置以及执行结果如下图所示。
[![](/img/aistudio/network/network-clustering/workflow-result.png)](/img/aistudio/network/network-clustering/workflow-result.png)