### 组件介绍
**“距离转换网络”（Network From Distances）**控件用于从输入的距离举证构造一个网络。通过从节点之间的距离低于给定阈值的矩阵连接节点来构建图。换句话说，距离小于所选阈值的所有实例将被连接。

<hr/>

- 输入：
  - dis：距离矩阵
- 输出：
  - nwdt：网络图实例
  - odt：属性值数据集
  - dis：距离矩阵

<hr/>


### 页面介绍
点击**“距离转换网络”（Network From Distances）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/network/network-from-distances/param.png) ](/img/aistudio/network/network-from-distances/param.png)

点击“查看直方图”按钮，查看直方图信息：  
[ ![](/img/aistudio/network/network-from-distances/interaction.png) ](/img/aistudio/network/network-from-distances/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>距离阈值</td> 
      <td>
      边缘形成的紧密度阈值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>百分数</td> 
      <td>
      要连接的数据实例的百分数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>包含最近邻节点</td> 
      <td>
      包括与所选实例最接近的邻居
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>保留所有节点</td> 
      <td>
      即输出整个网络
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>保留连接组件至少包含节点数</td> 
      <td>
      筛选出少于设置的节点数的节点
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>保留最大连接组件</td> 
      <td>
      仅保留最大的群集
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>正比于距离</td> 
      <td>
      设置权重以反映距离（接近度）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>反比于距离</td> 
      <td>
      设置权重以反映倒转距离（差异）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>输入数据量</td> 
      <td>
      输入数据的实例数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>网络节点数量</td> 
      <td>
      网络中的节点数（以及原始数据的百分比）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>网络边数量</td> 
      <td>
      构造的边缘或连接数（以及每个节点的平均连接数）
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载距离文件”（Distance File）**控件加载数据，使用**“距离转换网络”（Network From Distances）**控件把距离矩阵转换为网络，之后使用**“网络查看器”（Network Explorer）**控件查看生成的网络。  
[ ![](/img/aistudio/network/network-from-distances/workflow.png) ](/img/aistudio/network/network-from-distances/workflow.png)

案例中加载 conferences 样例数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/network/network-from-distances/workflow-result.png ](/img/aistudio/network/network-from-distances/workflow-result.png)