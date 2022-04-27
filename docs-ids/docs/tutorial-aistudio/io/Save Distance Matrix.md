### 组件介绍
**“保存距离矩阵”（Save Distance Matrix）**控件将距离矩阵保存到本地。

<hr/>

- 输入：
  - dis：距离矩阵
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“保存距离矩阵”（Save Distance Matrix）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/save-distance-matrix/param.png) ](/img/aistudio/io/save-distance-matrix/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>文件名</td> 
      <td>
      需要保存的文件名称
      </td> 
      <td>mydata</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（save-distance-matrix）**控件加载样例数据集，然后连接**“距离转换”（Distances）**控件把数据集转换为距离矩阵，最后连接“保存距离矩阵”（Save Distance Matrix）控件将转换后的距离矩阵保存到本地。  
[ ![](/img/aistudio/io/save-distance-matrix/workflow.png) ](/img/aistudio/io/save-distance-matrix/workflow.png)

案例中加载 iris 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/io/save-distance-matrix/workflow-result.png) ](/img/aistudio/io/save-distance-matrix/workflow-result.png)