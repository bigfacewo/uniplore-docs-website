### 组件介绍
**网络分析器（Network Analysis）**控件用于对图数据进行统计分析。

<hr/>

- 输入：
  - nwdt：网络图实例
- 输出：
  - data：图文件属性
  - nwdt：网络图实例

<hr/>


### 页面介绍
点击**网络分析器（Network Analysis）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/network/network-analysis/param-1.png) ](/img/aistudio/network/network-analysis/param-1.png)

[ ![](/img/aistudio/network/network-analysis/param-2.png) ](/img/aistudio/network/network-analysis/param-2.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>图级别目录</td> 
      <td>
      对网络图中图级别信息进行统计分析
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>点级别目录</td> 
      <td>
      对网络图中点级别信息进行统计分析
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**网络生成器（Network Generator）**控件生成网络图，之后连接**网络分析器（Network Analysis）**控件对图数据进行统计分析。  
[ ![](/img/aistudio/network/network-analysis/workflow.png) ](/img/aistudio/network/network-analysis/workflow.png)

案例中全部组件使用默认配置，**网络分析器（Network Analysis）**中勾选图级别目录中的节点数目、边数目、平均度、密度、直径、半径，其对应的数目将在后面展示。案例中组件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/network/network-analysis/workflow-result.png ](/img/aistudio/network/network-analysis/workflow-result.png)